---
layout: page
title: Submit content
icon: fas fa-paper-plane
order: 5
permalink: /submit/
description: "Suggest a Power Platform governance blog or article for review and possible publication."
---

Suggest an article or blog about Power Platform governance. We publish short summaries after review, credit the original author and link to the detailed article.

{% assign submission_endpoint = site.data.submission.endpoint | default: '' | strip %}
{% if submission_endpoint == '' %}
<p class="prompt-info">Submissions are not open yet. Please check back soon.</p>
{% endif %}

<form class="submission-form" method="post" action="{{ submission_endpoint | escape }}" data-submission-form>
  <p>
    <label for="content-url">Article, blog or RSS URL</label>
    <input id="content-url" name="content_url" type="url" pattern="https?://.+" maxlength="2048" placeholder="https://" required>
  </p>

  <details class="submission-credit">
    <summary>Add your name and LinkedIn profile <span>(optional)</span></summary>
    <div class="submission-fields">
      <p><label for="submitter-name">Your name</label><input id="submitter-name" name="submitter_name" type="text" autocomplete="name" maxlength="100"></p>
      <p><label for="submitter-linkedin">LinkedIn profile</label><input id="submitter-linkedin" name="submitter_linkedin" type="url" pattern="https://(www\.)?linkedin\.com/in/.+" title="Use a LinkedIn profile URL starting with https://www.linkedin.com/in/" placeholder="https://www.linkedin.com/in/" maxlength="2048"></p>
    </div>
    <p class="submission-consent"><label><input name="publish_credit" type="checkbox" value="yes"> I agree to have my name and LinkedIn profile published with this suggestion.</label></p>
  </details>

  <button class="submission-submit" type="submit"{% if submission_endpoint == '' %} disabled{% endif %}><i class="fas fa-paper-plane" aria-hidden="true"></i> Send for review</button>
  <p class="submission-status" data-submission-status aria-live="polite"></p>
</form>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('[data-submission-form]');
    const status = document.querySelector('[data-submission-status]');

    if (!form || !status) return;

    form.addEventListener('invalid', function (event) {
      const details = event.target.closest('details');
      if (details) details.open = true;
    }, true);

    if (!form.getAttribute('action').trim()) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        status.textContent = 'Submissions are not open yet. Nothing has been sent.';
      });
    }
  });
</script>
