#!/usr/bin/env python3
"""Render one Power Platform Governance Daily-style card PNG per pending
curated article.

Ported from MarceLehmann/Copilot_LinkedIn render/govcard.py + hand.py
(statement layout only, English text only - card copy always stays
English regardless of the post's language, matching the existing brand
cards). Unlike the source templates, this card carries no personal
portrait or signature - this site publishes as governance_editorial,
independent of any one person. Reads tools/pending-cards.json (written
by publish-curation.rb), writes assets/img/curated/<id>.png per entry.
"""
import json
import math
import os
import random

from PIL import Image, ImageDraw, ImageFont

W, H = 1080, 1350
HERE = os.path.dirname(os.path.abspath(__file__))
ROOT = os.path.dirname(HERE)
FONT_DIR = os.path.join(HERE, 'render-assets', 'fonts')
MANIFEST_PATH = os.path.join(HERE, 'pending-cards.json')
OUT_DIR = os.path.join(ROOT, 'assets', 'img', 'curated')

NAVY = (16, 34, 62)
INK = (24, 32, 44)
GRAY = (110, 120, 134)
LGRAY = (208, 216, 226)
PAPER = (251, 251, 249)
TEAL = (0, 120, 130)
GOLD = (222, 168, 62)
GREEN = (34, 132, 86)


def _font_path(name):
    path = os.path.join(FONT_DIR, name)
    if not os.path.exists(path):
        raise SystemExit(f'Missing font: {path}')
    return path


BOLD = _font_path('Kalam-Bold.ttf')
REG = _font_path('Kalam-Regular.ttf')


def font(size, bold=True):
    return ImageFont.truetype(BOLD if bold else REG, size)


def wobbly_line(d, pts, fill, width=3, rng=None, amp=1.6, seg=26):
    rng = rng or random.Random(0)
    path = [tuple(map(float, pts[0]))]
    for (x0, y0), (x1, y1) in zip(pts, pts[1:]):
        dist = math.hypot(x1 - x0, y1 - y0)
        n = max(2, int(dist / seg))
        nx, ny = ((y0 - y1) / dist, (x1 - x0) / dist) if dist else (0.0, 0.0)
        for i in range(1, n + 1):
            t = i / float(n)
            j = 0.0 if i == n else rng.uniform(-amp, amp)
            path.append((x0 + (x1 - x0) * t + nx * j, y0 + (y1 - y0) * t + ny * j))
    d.line(path, fill=fill, width=width, joint='curve')


def check_mark(d, box, color, width=5, rng=None):
    x0, y0, x1, y1 = box
    w, h = x1 - x0, y1 - y0
    wobbly_line(d, [(x0, y0 + h * 0.55), (x0 + w * 0.35, y1)], color, width, rng, 0.9, 10)
    wobbly_line(d, [(x0 + w * 0.35, y1), (x1, y0)], color, width, rng, 0.9, 12)


class Card:
    def __init__(self, seed):
        self.rng = random.Random(seed)
        self.img = Image.new('RGB', (W, H), PAPER)
        self.d = ImageDraw.Draw(self.img)

    def tl(self, text, f):
        return self.d.textlength(text, font=f)

    def wrap(self, text, f, maxw):
        words, lines, cur = text.split(), [], ''
        for w_ in words:
            candidate = (cur + ' ' + w_).strip()
            if self.tl(candidate, f) <= maxw:
                cur = candidate
            else:
                if cur:
                    lines.append(cur)
                cur = w_
        if cur:
            lines.append(cur)
        return lines

    def text(self, xy, s, **kw):
        self.d.text(xy, s, **kw)

    def block(self, x, y, text, f, fill, maxw, lh):
        for ln in self.wrap(text, f, maxw):
            self.text((x, y), ln, font=f, fill=fill)
            y += lh
        return y

    def tag(self, x, y, text, fg, bg):
        f = font(24)
        tw = self.tl(text, f)
        self.d.rounded_rectangle([x, y, x + tw + 44, y + 46], radius=23, fill=bg)
        self.text((x + 22, y + 8), text, font=f, fill=fg)
        return x + tw + 44

    def kicker(self):
        wobbly_line(self.d, [(0, 12), (W, 12)], GOLD, width=10, rng=self.rng, amp=1.6, seg=44)
        f = font(26)
        t = 'POWER PLATFORM GOVERNANCE'
        self.text((70, 62), t, font=f, fill=NAVY)
        tw = self.tl(t, f)
        self.text((70 + tw + 18, 62), 'DAILY', font=f, fill=GOLD)
        wobbly_line(self.d, [(70, 112), (W - 70, 112)], LGRAY, width=2, rng=self.rng)

    def footer(self):
        wobbly_line(self.d, [(70, H - 118), (W - 70, H - 118)], LGRAY, width=2, rng=self.rng)
        self.text((70, H - 92), '#PowerPlatformGovernanceDaily', font=font(24, bold=False), fill=GRAY)
        t = 'powerplatformgovernance.com'
        f = font(24)
        self.text((W - 70 - self.tl(t, f), H - 92), t, font=f, fill=TEAL)


def render_statement(entry):
    c = Card(seed=entry['id'])
    c.kicker()
    c.tag(70, 170, entry['topic'].upper(), NAVY, GOLD)
    c.d.text((62, 250), '“', font=font(200), fill=GOLD)
    y = 420
    f = font(62)
    lines = c.wrap(entry['quote'], f, W - 180)
    if len(lines) > 4:
        f = font(52)
        lines = c.wrap(entry['quote'], f, W - 180)
    for ln in lines:
        c.text((90, y), ln, font=f, fill=INK)
        y += int(f.size * 1.32)
    y += 40
    wobbly_line(c.d, [(90, y), (330, y)], GOLD, width=5, rng=c.rng, amp=2.0)
    y += 50
    y = c.block(90, y, entry['take'], font(36, bold=False), GRAY, W - 180, 52)
    c.tag(90, H - 220, '     ' + entry['state'], NAVY, (222, 232, 244))
    check_mark(c.d, (108, H - 210, 134, H - 184), GREEN, width=4, rng=c.rng)
    c.footer()
    return c.img


def main():
    if not os.path.exists(MANIFEST_PATH):
        print('No pending-cards.json, nothing to render.')
        return
    entries = json.load(open(MANIFEST_PATH, encoding='utf-8'))
    os.makedirs(OUT_DIR, exist_ok=True)
    for entry in entries:
        img = render_statement(entry)
        out = os.path.join(OUT_DIR, f"{entry['id']}.png")
        img.save(out, optimize=True)
        print(out, os.path.getsize(out))


if __name__ == '__main__':
    main()
