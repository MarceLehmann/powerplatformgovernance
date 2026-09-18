(() => {
  const form = document.querySelector('[data-submission-form]');
  const status = document.querySelector('[data-submission-status]');
  if (!form || !status) return;

  const button = form.querySelector('button[type="submit"]');
  const endpoint = form.getAttribute('action').trim();
  let configured = false;
  let sending = false;
  try {
    const url = new URL(endpoint);
    configured = url.protocol === 'https:' && !url.username && !url.password && !url.search && !url.hash &&
      (!url.port || url.port === '443') && !/(?:^|\.)(?:logic\.azure\.com|api\.powerplatform\.com|flow\.microsoft\.com)$/i.test(url.hostname);
  } catch {}
  button.disabled = !configured;

  form.addEventListener('invalid', event => {
    const details = event.target.closest('details');
    if (details) details.open = true;
  }, true);

  form.addEventListener('submit', async event => {
    event.preventDefault();
    if (sending) return;
    if (!configured) {
      status.textContent = 'Submissions are not open yet. Nothing has been sent.';
      return;
    }
    if (!form.reportValidity()) return;
    const values = new FormData(form);
    const payload = { content_url: values.get('content_url').trim(), website: values.get('website') || '' };
    if (values.get('publish_credit') === 'yes') {
      payload.publish_credit = 'yes';
      payload.submitter_name = (values.get('submitter_name') || '').trim();
      payload.submitter_linkedin = (values.get('submitter_linkedin') || '').trim();
    }
    sending = true;
    button.disabled = true;
    form.setAttribute('aria-busy', 'true');
    status.textContent = 'Sending for review...';
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 30000);
    try {
      const response = await fetch(endpoint, {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(payload),
        mode: 'cors', credentials: 'omit', referrerPolicy: 'no-referrer', cache: 'no-store', signal: controller.signal,
      });
      if (response.status === 429) {
        status.textContent = 'Too many submissions. Please try again later. Your entries are unchanged.';
        return;
      }
      if (response.status === 400) {
        status.textContent = 'Please check the HTTPS article URL and optional LinkedIn profile. Your entries are unchanged.';
        return;
      }
      const result = await response.json();
      if (!response.ok || result.accepted !== true || result.status !== 'awaiting_review') throw new Error('Unconfirmed submission');
      form.reset();
      status.textContent = 'Your suggestion has been submitted for review. Nothing has been published.';
    } catch {
      status.textContent = 'We could not confirm your submission. Your entries are unchanged. Please try again.';
    } finally {
      clearTimeout(timeout);
      sending = false;
      button.disabled = false;
      form.removeAttribute('aria-busy');
    }
  });
})();