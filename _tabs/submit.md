---
layout: page
title: Submit content
icon: fas fa-paper-plane
order: 5
permalink: /submit/
description: "Suggest a Power Platform governance blog or article for review and possible publication."
---

# Share your governance content

Help others discover practical Power Platform governance content. Choose what you want to submit and send us the link. We review every suggestion before it is published.

<div class="submission-options" role="radiogroup" aria-label="Submission type">
  <button type="button" class="submission-option is-selected" data-submission-choice="rss_feed" aria-pressed="true">
    <span class="submission-option-icon"><i class="fas fa-rss"></i></span>
    <span><strong>My whole blog</strong><small>Share an RSS or Atom feed for regular publications.</small></span>
  </button>
  <button type="button" class="submission-option" data-submission-choice="single_article" aria-pressed="false">
    <span class="submission-option-icon"><i class="fas fa-file-lines"></i></span>
    <span><strong>One article</strong><small>Recommend one guide, case study or governance post.</small></span>
  </button>
</div>

<p class="submission-note"><i class="fas fa-circle-check"></i> We review each suggestion and let you know when a decision has been made.</p>

<form class="submission-form" method="post" action="{{ site.data.submission.endpoint }}" data-submission-form>
  <input id="submission-type" name="submission_type" type="hidden" value="rss_feed">

  <div class="submission-form-heading">
    <span class="submission-step">01</span>
    <div><h2 data-form-title>Share your blog</h2><p data-form-description>Tell us where we can find your RSS or Atom feed.</p></div>
  </div>

  <div class="submission-fields">
    <p class="field-wide">
      <label for="blog-name">Blog or organisation</label>
      <input id="blog-name" name="blog_name" type="text" placeholder="e.g. Contoso Power Platform" required>
    </p>
    <p class="field-wide" data-article-title hidden>
      <label for="article-title">Article title</label>
      <input id="article-title" name="article_title" type="text" placeholder="The title of the article">
    </p>
    <p>
      <label for="website-url" data-website-label>Blog URL</label>
      <input id="website-url" name="website_url" type="url" placeholder="https://example.com" required>
    </p>
    <p data-feed-field>
      <label for="feed-url">RSS or Atom feed URL</label>
      <input id="feed-url" name="feed_url" type="url" placeholder="https://example.com/feed.xml">
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
    <div class="submission-form-heading"><span class="submission-step">02</span><div><h2>How can we reach you?</h2><p>Only for the review response.</p></div></div>
    <div class="submission-fields">
      <p><label for="name">Your name</label><input id="name" name="name" type="text" autocomplete="name" required></p>
      <p><label for="email">Your email</label><input id="email" name="email" type="email" autocomplete="email" required></p>
    </div>
  </div>

  <p class="submission-consent"><label><input name="permission" type="checkbox" value="yes" required> I confirm that I may submit this content and that the source can be credited.</label></p>
  <button class="submission-submit" type="submit"><i class="fas fa-paper-plane"></i> Send for review</button>
  <p class="submission-status" data-submission-status aria-live="polite"></p>
</form>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('[data-submission-form]');
    const status = document.querySelector('[data-submission-status]');
    const type = document.querySelector('#submission-type');
    const feed = document.querySelector('#feed-url');
    const articleTitle = document.querySelector('[data-article-title]');
    const websiteLabel = document.querySelector('[data-website-label]');
    const formTitle = document.querySelector('[data-form-title]');
    const formDescription = document.querySelector('[data-form-description]');
    const choices = document.querySelectorAll('[data-submission-choice]');

    if (!form || !status) return;

    function updateSubmissionType(value) {
      type.value = value;
      const isFeed = type.value === 'rss_feed';
      feed.required = isFeed;
      feed.closest('p').hidden = !isFeed;
      articleTitle.hidden = isFeed;
      document.querySelector('#article-title').required = !isFeed;
      websiteLabel.textContent = isFeed ? 'Blog URL' : 'Article URL';
      formTitle.textContent = isFeed ? 'Share your blog' : 'Share one article';
      formDescription.textContent = isFeed ? 'Tell us where we can find your RSS or Atom feed.' : 'Send us the article you would like to recommend.';
      choices.forEach(function (choice) {
        const selected = choice.dataset.submissionChoice === value;
        choice.classList.toggle('is-selected', selected);
        choice.setAttribute('aria-pressed', selected ? 'true' : 'false');
      });
    }

    choices.forEach(function (choice) {
      choice.addEventListener('click', function () { updateSubmissionType(choice.dataset.submissionChoice); });
    });
    updateSubmissionType(type.value);

    if (!form.action || form.action.endsWith('/submit/')) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        status.textContent = 'Thank you. Your suggestion has been received for review.';
      });
    }
  });
</script>
