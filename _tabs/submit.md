---
layout: page
title: Submit content
icon: fas fa-paper-plane
order: 5
permalink: /submit/
description: "Suggest a Power Platform governance blog or article for review and possible publication."
---

Share a blog or an article about Power Platform governance, security, ALM or Copilot Studio. Suggestions are published only after review, with a link to the original source.

{% assign submission_endpoint = site.data.submission.endpoint | default: '' | strip %}
{% if submission_endpoint == '' %}
<p class="prompt-info">Submissions are not open yet. Please check back soon.</p>
{% endif %}

<form class="submission-form" method="post" action="{{ submission_endpoint | escape }}" data-submission-form>
  <fieldset class="submission-options">
    <legend>What would you like to share?</legend>
    <label><input type="radio" name="submission_type" value="rss_feed" checked> <i class="fas fa-rss" aria-hidden="true"></i> A blog via RSS</label>
    <label><input type="radio" name="submission_type" value="single_article"> <i class="fas fa-file-alt" aria-hidden="true"></i> One article</label>
  </fieldset>

  <div class="submission-fields">
    <p class="field-wide">
      <label for="blog-name">Blog or publication name</label>
      <input id="blog-name" name="blog_name" type="text" maxlength="160" required>
    </p>
    <p class="field-wide" data-article-title hidden>
      <label for="article-title">Article title</label>
      <input id="article-title" name="article_title" type="text" maxlength="240" disabled>
    </p>
    <p>
      <label for="website-url" data-website-label>Blog URL</label>
      <input id="website-url" name="website_url" type="url" placeholder="https://example.com" required>
    </p>
    <p data-feed-field>
      <label for="feed-url">RSS or Atom feed URL</label>
      <input id="feed-url" name="feed_url" type="url" placeholder="https://example.com/feed.xml" required>
    </p>
    <p>
      <label for="topics">Main topics <span>optional</span></label>
      <input id="topics" name="topics" type="text" placeholder="DLP, ALM, security">
    </p>
    <p>
      <label for="language">Content language</label>
      <select id="language" name="language" required>
        <option value="en">English</option>
        <option value="de">Deutsch</option>
        <option value="other">Other</option>
      </select>
    </p>
    <p class="field-wide">
      <label for="reason">Why should the community see it? <span>optional</span></label>
      <textarea id="reason" name="reason" rows="4" placeholder="What practical value does this content offer?"></textarea>
    </p>
  </div>

  <div class="submission-contact">
    <h2>Contact details</h2>
    <div class="submission-fields">
      <p><label for="name">Your name</label><input id="name" name="name" type="text" autocomplete="name" required></p>
      <p><label for="email">Your email</label><input id="email" name="email" type="email" autocomplete="email" required></p>
    </div>
  </div>

  <p class="submission-consent"><label><input name="permission" type="checkbox" value="yes" required> I confirm that I may submit this content and that the source can be credited.</label></p>
  <button class="submission-submit" type="submit"{% if submission_endpoint == '' %} disabled{% endif %}><i class="fas fa-paper-plane" aria-hidden="true"></i> Send for review</button>
  <p class="submission-status" data-submission-status aria-live="polite"></p>
</form>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('[data-submission-form]');
    const status = document.querySelector('[data-submission-status]');
    const feed = document.querySelector('#feed-url');
    const articleTitle = document.querySelector('[data-article-title]');
    const articleInput = document.querySelector('#article-title');
    const websiteLabel = document.querySelector('[data-website-label]');
    const choices = document.querySelectorAll('input[name="submission_type"]');

    if (!form || !status) return;

    function updateSubmissionType(value) {
      const isFeed = value === 'rss_feed';
      feed.required = isFeed;
      feed.disabled = !isFeed;
      feed.closest('p').hidden = !isFeed;
      articleTitle.hidden = isFeed;
      articleInput.required = !isFeed;
      articleInput.disabled = isFeed;
      websiteLabel.textContent = isFeed ? 'Blog URL' : 'Article URL';
    }

    choices.forEach(function (choice) {
      choice.addEventListener('change', function () { updateSubmissionType(choice.value); });
    });
    updateSubmissionType(form.querySelector('input[name="submission_type"]:checked').value);

    if (!form.getAttribute('action').trim()) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        status.textContent = 'Submissions are not open yet. Nothing has been sent.';
      });
    }
  });
</script>
