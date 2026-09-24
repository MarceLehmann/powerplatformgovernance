#!/usr/bin/env python3
"""Send a daily digest email (via Brevo) for newly published curated posts.

Reads _posts/*-de.md / *-en.md pairs (matched by curation_id), skips any
curation_id already recorded in tools/digest-sent.json, builds one digest
email per new batch (DE + EN TL;DR per article), sends it as a Brevo email
campaign to the PowerPlatformGovernance list, then updates the state file.

Exits 0 with no API call if there is nothing new to send.
"""
import datetime
import json
import os
import re
import sys
import urllib.error
import urllib.request
from pathlib import Path

REPO_ROOT = Path(__file__).resolve().parent.parent
POSTS_DIR = REPO_ROOT / "_posts"
STATE_FILE = REPO_ROOT / "tools" / "digest-sent.json"
SITE_URL = "https://powerplatformgovernance.com"
LIST_ID = 22
SENDER_NAME = "Power Platform Governance"
SENDER_EMAIL = "governance@powerplatformtip.com"

FRONTMATTER_RE = re.compile(r"^---\n(.*?)\n---\n(.*)$", re.DOTALL)
TLDR_RE = re.compile(r"##\s*TL;DR\s*\n+(.*?)(?=\n##|\n\{%|\Z)", re.DOTALL)


def parse_post(path: Path):
    text = path.read_text(encoding="utf-8")
    m = FRONTMATTER_RE.match(text)
    if not m:
        return None
    front_raw, body = m.group(1), m.group(2)

    def field(name):
        fm = re.search(rf"^{name}:\s*(.+)$", front_raw, re.MULTILINE)
        if not fm:
            return None
        val = fm.group(1).strip()
        return val.strip("'\"")

    curation_id = field("curation_id")
    if not curation_id:
        return None
    tldr_m = TLDR_RE.search(body)
    tldr = tldr_m.group(1).strip() if tldr_m else ""
    tldr = re.sub(r"\{%.*?%\}", "", tldr).strip()
    return {
        "curation_id": curation_id,
        "lang": field("lang"),
        "title": field("title"),
        "permalink": field("permalink"),
        "source_name": field("source_name"),
        "tldr": tldr,
    }


def load_state():
    if STATE_FILE.exists():
        return set(json.loads(STATE_FILE.read_text(encoding="utf-8")).get("sent_curation_ids", []))
    return set()


def save_state(sent_ids):
    STATE_FILE.parent.mkdir(parents=True, exist_ok=True)
    STATE_FILE.write_text(
        json.dumps({"sent_curation_ids": sorted(sent_ids)}, indent=2) + "\n",
        encoding="utf-8",
    )


def build_html(articles):
    rows = []
    for a in articles:
        de, en = a.get("de"), a.get("en")
        title = (de or en)["title"]
        link_de = f"{SITE_URL}{de['permalink']}" if de else None
        link_en = f"{SITE_URL}{en['permalink']}" if en else None
        source = (de or en).get("source_name") or ""
        rows.append(f"""
        <tr><td style="padding:24px 0;border-bottom:1px solid #e5e7eb;">
          <h2 style="margin:0 0 4px;font-size:18px;color:#0a2050;">{title}</h2>
          <p style="margin:0 0 12px;font-size:12px;color:#6b7280;">Quelle / Source: {source}</p>
          {f'<p style="margin:0 0 6px;font-size:14px;color:#111;"><strong>DE:</strong> {de["tldr"]}</p>' if de else ''}
          {f'<p style="margin:0 0 12px;font-size:14px;color:#111;"><strong>EN:</strong> {en["tldr"]}</p>' if en else ''}
          <p style="margin:0;font-size:13px;">
            {f'<a href="{link_de}" style="color:#25c1bf;text-decoration:none;margin-right:16px;">Weiterlesen (DE) →</a>' if link_de else ''}
            {f'<a href="{link_en}" style="color:#25c1bf;text-decoration:none;">Read more (EN) →</a>' if link_en else ''}
          </p>
        </td></tr>""")
    return f"""<!DOCTYPE html>
<html><body style="margin:0;padding:0;background:#f7f7f7;font-family:Arial,Helvetica,sans-serif;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:640px;margin:0 auto;background:#fff;">
  <tr><td style="padding:32px 24px 16px;">
    <p style="margin:0;font-size:12px;letter-spacing:.1em;text-transform:uppercase;color:#25c1bf;font-weight:bold;">Power Platform Governance</p>
    <h1 style="margin:8px 0 0;font-size:22px;color:#0a2050;">Neue Governance-Artikel heute / New governance articles today</h1>
  </td></tr>
  <tr><td style="padding:0 24px;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0">{''.join(rows)}</table>
  </td></tr>
  <tr><td style="padding:24px;text-align:center;">
    <a href="{SITE_URL}" style="color:#6b7280;font-size:12px;">{SITE_URL}</a>
  </td></tr>
</table>
</body></html>"""


def main():
    api_key = os.environ.get("BREVO_API_KEY")
    if not api_key:
        print("BREVO_API_KEY missing", file=sys.stderr)
        sys.exit(1)

    sent_ids = load_state()
    by_curation = {}
    for path in POSTS_DIR.glob("*.md"):
        post = parse_post(path)
        if not post or post["curation_id"] in sent_ids:
            continue
        by_curation.setdefault(post["curation_id"], {})[post["lang"]] = post

    new_articles = [
        {"curation_id": cid, **langs}
        for cid, langs in by_curation.items()
        if langs.get("de") or langs.get("en")
    ]

    if not new_articles:
        print("No new curated articles today - skipping digest.")
        return

    print(f"Found {len(new_articles)} new article(s) for the digest.")
    html = build_html(new_articles)

    today = datetime.date.today().isoformat()
    payload = {
        "name": f"Governance Digest {today}",
        "subject": f"Power Platform Governance: {len(new_articles)} neue Artikel / new articles ({today})",
        "sender": {"name": SENDER_NAME, "email": SENDER_EMAIL},
        "type": "classic",
        "htmlContent": html,
        "recipients": {"listIds": [LIST_ID]},
    }
    req = urllib.request.Request(
        "https://api.brevo.com/v3/emailCampaigns",
        data=json.dumps(payload).encode("utf-8"),
        headers={"api-key": api_key, "Content-Type": "application/json", "Accept": "application/json"},
        method="POST",
    )
    try:
        with urllib.request.urlopen(req) as resp:
            campaign = json.loads(resp.read().decode("utf-8"))
    except urllib.error.HTTPError as e:
        body = json.loads(e.read().decode("utf-8"))
        if body.get("code") == "invalid_parameter" and "no contacts" in body.get("message", "").lower():
            print(
                f"List {LIST_ID} has no subscribers yet - not sending, and NOT marking "
                f"{len(new_articles)} article(s) as covered, so the first real subscriber "
                f"still gets them in a future digest run."
            )
            return
        raise
    campaign_id = campaign["id"]
    print(f"Created Brevo campaign {campaign_id}")

    send_req = urllib.request.Request(
        f"https://api.brevo.com/v3/emailCampaigns/{campaign_id}/sendNow",
        headers={"api-key": api_key, "Accept": "application/json"},
        method="POST",
    )
    urllib.request.urlopen(send_req)
    print(f"Sent campaign {campaign_id} to list {LIST_ID}")

    sent_ids.update(a["curation_id"] for a in new_articles)
    save_state(sent_ids)


if __name__ == "__main__":
    main()
