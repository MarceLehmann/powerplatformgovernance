#!/usr/bin/env python3
"""Kopfbild- und Karten-Varianten als verlustfreies WebP (Core Web Vitals, LCP, Seitengewicht).

Die Karten unter assets/img/curated/<id>.png sind 1080x1350 (4:5, fuer Social Media). Dieses Skript schreibt zwei
WebP-Dateien daneben, beide verlustfrei (gleiche Pixel wie das PNG, bei diesen flaechigen Karten deutlich kleiner):
  <id>-hero.webp   Kopfbild des Beitrags: genau der Ausschnitt 40:21 (1080x567), den das Theme dort zeigt
                   (CSS object-fit: cover, Mitte)
  <id>-card.webp   die ganze Karte fuer die Startseite (dort hat die Karte je nach Textlaenge ein anderes
                   Seitenverhaeltnis, darum kein Zuschnitt)
Das Original-PNG bleibt unveraendert (Lightbox, Open Graph, Social-Posts). Die Templates (_layouts/post.html,
_layouts/home.html) nutzen die WebP-Dateien nur, wenn sie existieren.

Aufruf: python tools/hero_webp.py            (alle PNG ohne Varianten oder mit neuerem PNG, nachziehen)
        python tools/hero_webp.py --force    (alle neu schreiben)
Wird ausserdem von tools/render_card.py fuer jede neue Karte aufgerufen.
"""
import os
import sys

from PIL import Image

ASPECT_W, ASPECT_H = 40, 21
CURATED_DIR = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'assets', 'img', 'curated')


def variant_paths(png_path):
    base = os.path.splitext(png_path)[0]
    return f'{base}-hero.webp', f'{base}-card.webp'


def _is_current(png_path, webp_path):
    """Die WebP-Datei existiert und ist nicht aelter als das PNG (wird ein PNG neu gerendert, wird sie erneuert)."""
    return os.path.exists(webp_path) and os.path.getmtime(webp_path) >= os.path.getmtime(png_path)


def make_variants(png_path, force=False):
    """Schreibt die WebP-Varianten zu einem PNG. Gibt die Liste der neu geschriebenen Dateien zurueck."""
    hero_path, card_path = variant_paths(png_path)
    if not force and _is_current(png_path, hero_path) and _is_current(png_path, card_path):
        return []
    with Image.open(png_path) as im:
        im = im.convert('RGB')
        w, h = im.size
        crop_h = min(h, round(w * ASPECT_H / ASPECT_W))
        top = (h - crop_h) // 2
        im.crop((0, top, w, top + crop_h)).save(hero_path, 'WEBP', lossless=True, method=6)
        im.save(card_path, 'WEBP', lossless=True, method=6)
    return [hero_path, card_path]


def main(argv):
    force = '--force' in argv
    total = 0
    for name in sorted(os.listdir(CURATED_DIR)):
        if name.endswith('.png'):
            total += len(make_variants(os.path.join(CURATED_DIR, name), force))
    print(f'{total} WebP-Dateien geschrieben')


if __name__ == '__main__':
    main(sys.argv[1:])
