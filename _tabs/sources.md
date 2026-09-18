---
layout: page
title: Sources
icon: fas fa-globe
order: 1
permalink: /sources/
description: "Original blogs and websites behind our Power Platform governance summaries, with direct links and related reading."
---

Credit belongs to the original authors. These are the publications featured in our curated summaries.

{% for source in site.data.curated_sources %}
<section data-source-domain="{{ source.domain | escape }}">
  <h2 class="h5 text-break mt-4"><a href="{{ source.url | escape }}">{{ source.domain | escape }}</a></h2>
  <p class="text-muted small">{{ source.posts.size }} {% if source.posts.size == 1 %}summary{% else %}summaries{% endif %}</p>
  <ul>
    {% for entry in source.posts %}
    <li><a href="{{ entry.url | relative_url | escape }}">{{ entry.title | escape }}</a></li>
    {% endfor %}
  </ul>
</section>
{% else %}
<p>No external sources have been featured yet.</p>
{% endfor %}