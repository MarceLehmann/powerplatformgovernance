---
layout: page
title: Submit content
icon: fas fa-paper-plane
order: 5
permalink: /submit/
description: "Suggest a Power Platform governance blog or article for review and possible publication."
---

# Bring your governance content to the community

Do you publish practical content about Power Platform governance, security, DLP, ALM, environments, Dataverse, Power Apps, Power Automate or Copilot Studio?

You can suggest an entire blog via RSS or submit a single article. Every submission is reviewed before publication.

## Two ways to submit

### Submit an RSS feed

Best for blogs that publish regularly. We review the feed and, after approval, evaluate new articles automatically before they enter the publication queue.

Please provide:

- Blog name
- Blog URL
- RSS or Atom feed URL
- Main topics
- Preferred language
- Contact name and email

### Submit one article

Best for a specific guide, case study or governance recommendation.

Please provide:

- Article title
- Article URL
- Author or organisation
- Main topic
- Preferred language
- Short reason why the article helps the governance community

## What happens after submission

We review every suggestion for relevance, quality and fit with the Power Platform governance community. If it is approved, we prepare it for publication and credit the original source.

Submission does not guarantee publication. You will receive an update when the review is complete.

## Submission form

Use the form below to send your suggestion for review.

<form class="submission-form" method="post" action="{{ site.data.submission.endpoint }}" data-submission-form>
  <p>
    <label for="submission-type">What would you like to submit?</label>
    <select id="submission-type" name="submission_type" required>
      <option value="rss_feed">An entire blog via RSS</option>
      <option value="single_article">A single article</option>
    </select>
  </p>
  <p>
    <label for="name">Your name</label>
    <input id="name" name="name" type="text" autocomplete="name" required>
  </p>
  <p>
    <label for="email">Your email</label>
    <input id="email" name="email" type="email" autocomplete="email" required>
  </p>
  <p>
    <label for="blog-name">Blog or organisation</label>
    <input id="blog-name" name="blog_name" type="text" required>
  </p>
  <p>
    <label for="website-url">Website or article URL</label>
    <input id="website-url" name="website_url" type="url" placeholder="https://" required>
  </p>
  <p>
    <label for="feed-url">RSS or Atom feed URL <span>(required for feed submissions)</span></label>
    <input id="feed-url" name="feed_url" type="url" placeholder="https://">
  </p>
  <p>
    <label for="language">Content language</label>
    <select id="language" name="language" required>
      <option value="en">English</option>
      <option value="de">Deutsch</option>
      <option value="other">Other</option>
    </select>
  </p>
  <p>
    <label for="topics">Topics</label>
    <input id="topics" name="topics" type="text" placeholder="DLP, ALM, security">
  </p>
  <p>
    <label for="reason">Why is this useful for the governance community?</label>
    <textarea id="reason" name="reason" rows="5" required></textarea>
  </p>
  <p class="submission-consent">
    <label>
      <input name="permission" type="checkbox" value="yes" required>
      I confirm that I may submit this content and that the source can be credited.
    </label>
  </p>
  <button type="submit">Send for review</button>
  <p class="submission-status" data-submission-status aria-live="polite"></p>
</form>

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('[data-submission-form]');
    const status = document.querySelector('[data-submission-status]');
    const type = document.querySelector('#submission-type');
    const feed = document.querySelector('#feed-url');

    if (!form || !status) return;

    function updateFeedRequirement() {
      const isFeed = type.value === 'rss_feed';
      feed.required = isFeed;
      feed.closest('p').hidden = !isFeed;
    }

    type.addEventListener('change', updateFeedRequirement);
    updateFeedRequirement();

    if (!form.action || form.action.endsWith('/submit/')) {
      form.addEventListener('submit', function (event) {
        event.preventDefault();
        status.textContent = 'Thank you. Your suggestion has been received for review.';
      });
    }
  });
</script>
