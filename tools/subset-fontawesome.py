#!/usr/bin/env python3
"""Font Awesome Free auf die benutzten Symbole verkleinern (Seitengewicht, E7).

Quelle: die vollen Schriften und das volle CSS unter tools/fontawesome-full/ (Font Awesome Free 7.3.1).
Ergebnis: die drei woff2-Dateien unter assets/lib/fontawesome-free/webfonts/ und assets/lib/fontawesome-free/css/all.min.css
mit nur den Symbolen, die das Theme und diese Site benutzen (Schrift von rund 255 KB auf rund 12 KB, CSS von 90 KB auf rund 25 KB).
Nicht enthaltene Symbole blieben leer.

Neues Symbol gebraucht (z. B. in einer Seite oder einem Include)? Name (ohne "fa-") in EXTRA eintragen
oder als fa-<name> im Quelltext verwenden (wird mitgescannt) und das Skript neu ausfuehren:
  pip install fonttools brotli
  python tools/subset-fontawesome.py
Behalten werden Symbole aus dem Repo-Quelltext (_includes, _layouts, _tabs, _data, _posts, assets/js,
Wurzel-Seiten) und die unten genannten.
"""
import os
import re
import sys

from fontTools import subset

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..')
FULL = os.path.join(ROOT, 'tools', 'fontawesome-full')
OUT = os.path.join(ROOT, 'assets', 'lib', 'fontawesome-free', 'webfonts')
CSS = os.path.join(FULL, 'all.min.css')  # volles CSS (Quelle)
CSS_OUT = os.path.join(ROOT, 'assets', 'lib', 'fontawesome-free', 'css', 'all.min.css')  # gekuerztes CSS (Ergebnis)
SCAN_DIRS = ['_includes', '_layouts', '_tabs', '_data', '_posts', 'assets/js', 'knowledge', 'redirects']

# Symbole des Chirpy-Themes 7.6 (Includes, Layouts, Daten, JS)
THEME = """angle-down angle-left angle-right angle-up archive arrow-up-right-from-square bars bluesky bolt book-open
calendar check check-circle circle circle-question clipboard code display envelope facebook-square file-code folder
folder-open globe handshake hashtag home info-circle language link linkedin list-ul mastodon moon paper-plane pen
reddit rss search spinner square-reddit square-threads square-x-twitter stack-overflow sun tag tags telegram threads
thumbtack triangle-exclamation user-shield volume-high weibo x-twitter""".split()
# kleine Reserve fuer Kontakt- und Teilen-Links
EXTRA = """github youtube linkedin-in facebook facebook-f twitter instagram whatsapp discord slack microsoft google
xmark times chevron-up chevron-down chevron-left chevron-right arrow-up arrow-right copy download""".split()

# Zeichen, die das Chirpy-CSS per content: einsetzt (kein fa-Klassenname im Quelltext): Prompt-Boxen (Tipp, Info, Warnung, Gefahr)
# und der Haken im Modus-Menue. Bei einem Theme-Update im gebauten CSS nach Zeichen im Bereich U+E000 bis U+F8FF suchen.
THEME_CODEPOINTS = [0xF06A, 0xF0EB, 0xF071, 0xF00C]

TOKEN = re.compile(r'\bfa-([a-z0-9]+(?:-[a-z0-9]+)*)')
MODIFIERS = {'fw', 'spin', 'solid', 'regular', 'brands', 'classic', 'xs', 'sm', 'lg', '1x', '2x', 'stack', 'ul', 'li'}


def used_names():
    names = set(THEME) | set(EXTRA)
    for sub in SCAN_DIRS:
        base = os.path.join(ROOT, sub)
        if not os.path.isdir(base):
            continue
        for dp, _, files in os.walk(base):
            for f in files:
                if f.endswith(('.html', '.js', '.yml', '.md', '.scss')):
                    try:
                        names |= set(TOKEN.findall(open(os.path.join(dp, f), encoding='utf8').read()))
                    except OSError:
                        pass
    for f in os.listdir(ROOT):
        if f.endswith(('.html', '.md')):
            names |= set(TOKEN.findall(open(os.path.join(ROOT, f), encoding='utf8').read()))
    return names


def codepoints(names):
    css = open(CSS, encoding='utf8').read()
    found = {}
    for sel, cp in re.findall(r'((?:\.fa-[a-z0-9-]+,?)+)\{--fa:"\\([0-9a-fA-F]+\s?|[^0-9a-fA-F])"', css):
        # "\#" ist das Zeichen # selbst, sonst Hex-Code
        value = int(cp, 16) if re.fullmatch(r'[0-9a-fA-F]+\s?', cp) else ord(cp)
        for n in re.findall(r'\.fa-([a-z0-9-]+)', sel):
            found[n] = value
    keep, missing = set(), []
    for n in sorted(names):
        if n in found:
            keep.add(found[n])
        elif n not in MODIFIERS:
            missing.append(n)
    return keep, missing


def prune_css(names):
    css = open(CSS, encoding='utf8').read()
    rule = re.compile(r'((?:\.fa-[a-z0-9-]+,?)+)(\{--fa:"[^"]*"[^}]*\})')

    def keep_rule(m):
        sels = [x for x in m.group(1).split(',') if x and x[len('.fa-'):] in names]
        return ','.join(sels) + m.group(2) if sels else ''

    out = rule.sub(keep_rule, css)
    with open(CSS_OUT, 'w', encoding='utf8', newline='') as f:
        f.write(out)
    print('all.min.css', len(css), '->', len(out))


def main():
    names = used_names()
    keep, missing = codepoints(names)
    keep |= set(THEME_CODEPOINTS)
    print(len(names), 'Namen,', len(keep), 'Zeichen (mit Theme-Zeichen); ohne Zuordnung im CSS:', ', '.join(missing) or '-')
    for name in ('fa-solid-900', 'fa-regular-400', 'fa-brands-400'):
        opts = subset.Options()
        opts.flavor = 'woff2'
        opts.layout_features = ['*']
        opts.notdef_outline = True
        opts.glyph_names = False
        font = subset.load_font(os.path.join(FULL, name + '.woff2'), opts)
        sub = subset.Subsetter(opts)
        sub.populate(unicodes=sorted(keep))
        sub.subset(font)
        dst = os.path.join(OUT, name + '.woff2')
        subset.save_font(font, dst, opts)
        print(name, os.path.getsize(os.path.join(FULL, name + '.woff2')), '->', os.path.getsize(dst))
    prune_css(names)  # erst nach erfolgreichem Subsetting der Schriften


if __name__ == '__main__':
    sys.exit(main())
