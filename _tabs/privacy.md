---
layout: page
title: Privacy Policy
icon: fas fa-user-shield
order: 7
permalink: /privacy/
description: "Privacy Policy for Power Platform Governance: how we collect, use and protect your data."
sitemap:
  priority: 0.3
  changefreq: yearly
---

**Last Updated:** November 15, 2026

## Introduction

Welcome to Power Platform Governance ("we," "our," or "us"), a project of Marcel Lehmann / KMUpower. This Privacy Policy explains how we collect, use, disclose and safeguard information when you visit [powerplatformgovernance.com](https://powerplatformgovernance.com).

## Controller

The controller for the processing described here is Marcel Lehmann, sole proprietorship (Einzelfirma) trading as "KMUpower", Weidstrasse 1, 8320 Fehraltorf, Switzerland, registered in the Swiss UID register since January 1, 2023 under UID CHE-296.591.945. Contact: [info@kmupower.com](mailto:info@kmupower.com). Further operator details are in the [Legal Notice](/legal-notice/).

**EU representative:** we have not appointed a representative in the EU under Art. 27 GDPR. We process data of people in the EU only occasionally, not on a large scale and without special categories of personal data; the risk to the people concerned is likely to be low (Art. 27(2)(a) GDPR). If our business in the EU grows, we will reassess this.

## Information We Collect

### Automatically Collected Information
We count page views with [GoatCounter](https://www.goatcounter.com), a privacy-friendly analytics service. GoatCounter does not set cookies, does not store your IP address or the full User-Agent header of your browser on disk, and does not track you across websites.

For each page view, GoatCounter receives the page address, the referring page, the User-Agent header, the screen width, the browser language and your IP address (needed for any network connection). It only stores aggregate counts per day or hour:
- **Page path and referring website or search engine**
- **Browser and operating system** (name and version only, e.g. "Firefox 139", "Windows 11")
- **Country** (derived from the IP address; the IP address itself is never written to disk)
- **Browser language and screen width**

To avoid counting a reload as a new visit, a combination of site, IP address and User-Agent is kept in memory only, for at most 8 hours, and is never written to disk. The stored counts cannot be linked to each other or to an individual person.

### Information You Provide Voluntarily
If you write to [info@kmupower.com](mailto:info@kmupower.com), we process your e-mail address and the content of your message to answer you. E-mail is handled with Microsoft 365 (see [Microsoft 365](#microsoft-365-e-mail-and-appointment-booking) below). Legal basis: our legitimate interest in answering enquiries and, where your message concerns a contract, the performance of it (Art. 6(1)(f) and (b) GDPR).

If you use the [content submission form](/submit/) to suggest an article for curation, we collect:
- **The suggested article/blog/RSS URL** (required)
- **Your name and LinkedIn profile URL** (optional, only if you choose to add them)
- A hidden anti-spam field that legitimate visitors never fill in; submissions where it is filled in are discarded automatically

Suggestions (from the form or from AI assistants via our [MCP server](#mcp-server-for-ai-assistants), tool `submit_news`) are received by our own submission service on Microsoft Azure (region Switzerland North). To stop spam, it limits how many suggestions can be sent per hour. For this, your IP address is used only at the moment of sending: it is turned into a one-way hash that changes every day, and only that hash and a counter are stored. Your IP address itself is never stored. The service also checks once that the suggested link is reachable.

The legal basis for processing a suggestion is our legitimate interest in curating the site and protecting the form against spam (Art. 6(1)(f) GDPR). Publishing your name and LinkedIn profile is based on your consent (Art. 6(1)(a) GDPR). We only publish your name and LinkedIn profile alongside a curated summary if you explicitly tick the "I agree to have my name and LinkedIn profile published with this suggestion" checkbox. Via the MCP server, the AI assistant has to pass your agreement explicitly (`publish_credit: yes`). If you leave the checkbox unticked or the assistant does not pass your agreement, the submission service discards your name and profile; they are not passed on and never shown on the site.

## How We Use Your Information

We use the information we collect to:

1. **Understand site usage**: Analyze which articles and topics are most useful, to guide future curation
2. **Process content suggestions**: Review submitted URLs and, if you opted in, credit you publicly for the suggestion
3. **Website improvement**: Identify broken links, slow pages, or content gaps
4. **Legal compliance**: Meet legal and regulatory requirements

## Cookies

This website does not use cookies, and it does not use local storage or similar technologies for analytics or tracking. That is why there is no cookie banner. Apart from technical functions of the site itself (for example remembering the light/dark mode you picked), nothing is stored in your browser.

## Third-Party Services

We use the following third-party services:

### GoatCounter (visitor counting without cookies)
- **Provider**: GoatCounter.com, operated by Martin Tournoij (Ireland); data is stored on servers of Hetzner Online GmbH in Finland and Germany
- **Purpose**: count page views so we know which articles and topics are read
- **Legal basis**: our legitimate interest in understanding how the site is used (Art. 6(1)(f) GDPR); only aggregate counts are stored permanently; the IP address is never written to disk (it is held in memory for at most 8 hours, see above)
- **No cookies, no IP address stored on disk, no tracking across websites**; apart from its hosting provider Hetzner, no data is shared with third parties
- The script (`count.js`) is served from this website itself; only the count request goes to GoatCounter
- GoatCounter's [Privacy Policy](https://www.goatcounter.com/help/privacy) and [GDPR notes](https://www.goatcounter.com/help/gdpr) apply
- You can block requests to goatcounter.com with any content blocker; the site works exactly the same

### Microsoft Azure (submission service for the form and the MCP server)
- **Provider**: Microsoft (Azure Functions and Azure Storage, region Switzerland North)
- **Purpose**: receive content suggestions, check them for spam and pass them on for review
- **Data**: the suggested URL, optional name and LinkedIn profile, and a daily changing hash of your IP address for the spam limit (no IP address in clear text)
- **Location**: the data is stored in Switzerland North. Microsoft acts as our processor. For transfers to the USA see [Transfers abroad](#transfers-abroad).
- **Legal basis**: legitimate interest in receiving and checking suggestions (Art. 6(1)(f) GDPR); consent for the optional publication of your name and profile (Art. 6(1)(a) GDPR)
- Microsoft's [Privacy Statement](https://privacy.microsoft.com/privacystatement) applies

### MCP server for AI assistants
We run a Model Context Protocol (MCP) server so that AI assistants can search and read the published entries: `https://func-mcp-kmupower.azurewebsites.net/governance/mcp` (no sign-in). Its only writing function is `submit_news`, which passes a suggestion to the submission service described above.
- **Provider**: Microsoft (Azure Functions, region Switzerland North), as our processor
- **Data**: the request of the AI assistant (for example a search term or the address of an entry) and, as with any web request, your IP address. The IP address is used in memory only, to limit requests per minute, and is not stored. The server does not store search terms or requests.
- **Operational logs**: Azure Application Insights records technical data about each call (for example time, path, status and duration) in Switzerland North; with its default setting it does not store the client IP address. Error messages are logged without IP address. These logs are kept for 30 days.
- **Legal basis**: our legitimate interest in offering the content to AI assistants and keeping the service secure (Art. 6(1)(f) GDPR)

### Microsoft 365 (e-mail and appointment booking)
- **E-mail**: messages to and from us are handled with Microsoft 365 (Exchange Online). Our contracting party is Microsoft Ireland Operations Limited, Ireland; Microsoft Corporation, USA, and other group companies may process data in the USA as sub-processors. Microsoft processes the data on our behalf.
- **Appointment booking**: the "Book an intro call" link on the [Offers](/offers/) page opens Microsoft Bookings, which is part of Microsoft 365. If you book, Microsoft processes your name, e-mail address, the chosen time and any notes you enter, on our behalf. Legal basis: steps prior to a contract at your request (Art. 6(1)(b) GDPR).
- Microsoft's [Privacy Statement](https://privacy.microsoft.com/privacystatement) applies

### Hosting: GitHub Pages
This website is hosted on GitHub Pages. The provider is GitHub, Inc., USA; pages are delivered through the network of Fastly, Inc., USA. When you open a page, GitHub and Fastly process technical access data (IP address, requested page, date and time, browser information) in their server logs to deliver the site securely and quickly. We do not receive these logs. Legal basis: our legitimate interest in a secure and reachable website (Art. 6(1)(f) GDPR). GitHub and Fastly decide how long the logs are kept. GitHub's [Privacy Statement](https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement) applies.

### Transfers abroad
Some providers are based in the USA or process data there (GitHub, Fastly, Microsoft). According to their privacy statements, Microsoft Corporation, GitHub, Inc. and Fastly, Inc. are certified under the EU-U.S. and the Swiss-U.S. Data Privacy Framework. Transfers to these companies rely on that certification (adequacy decision of the European Commission, Art. 45 GDPR; recognition by the Swiss Federal Council, Annex 1 of the Swiss Data Protection Ordinance). For Microsoft, the European Commission's Standard Contractual Clauses in the [Microsoft Products and Services Data Protection Addendum](https://www.microsoft.com/licensing/docs/view/Microsoft-Products-and-Services-Data-Protection-Addendum-DPA) apply in addition. You can request a copy of these safeguards at [info@kmupower.com](mailto:info@kmupower.com).

### LinkedIn profile links (optional)
LinkedIn is not a service provider of this website. If you add a LinkedIn profile URL to a content suggestion (form or MCP server) and agree to publication, that URL is displayed on the resulting page as a clickable link. We do not otherwise integrate with or receive data from LinkedIn.

## Data Security

We implement reasonable technical and organizational measures to protect information submitted to us:

- **Encryption**: HTTPS encryption for all website traffic
- **Minimal collection**: We only ask for what a content suggestion genuinely needs
- **Third-Party Security**: We only work with reputable, widely-used service providers (GoatCounter, GitHub, Fastly, Microsoft)

However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.

## Data Retention

- **Analytics data**: GoatCounter only stores aggregate counts (see above), which cannot be linked to a person; the in-memory visit marker (site, IP address and User-Agent) is discarded after at most 8 hours
- **Content suggestions**: Retained as long as needed to review and, if published, attribute the curated summary; you may request deletion at any time (see "Your Rights" below)
- **E-mail correspondence and bookings**: Kept as long as needed for the purpose, then deleted. Statutory retention duties (for example 10 years for accounting records, Art. 958f Swiss Code of Obligations) remain reserved.
- **MCP server operational logs**: 30 days (see above)
- **Server logs at GitHub/Fastly**: Retention is set by these providers, not by us

## Your Rights (GDPR / Swiss FADP)

Depending on where you live, you may have the following rights regarding your personal data:

1. **Right to Access**: Request a copy of the personal data we hold about you
2. **Right to Rectification**: Correct inaccurate or incomplete data
3. **Right to Erasure**: Request deletion of your personal data (e.g. removing your name/LinkedIn credit from a published post)
4. **Right to Restriction**: Request that we restrict the processing of your personal data
5. **Right to Object**: Object to processing based on our legitimate interests
6. **Right to Data Portability**: Receive the data you provided to us in a common, machine-readable format, or have it transferred to another controller
7. **Right to Withdraw Consent**: Withdraw your earlier consent to publish your name/LinkedIn credit at any time, with effect for the future
8. **Right to Lodge a Complaint**: With the Swiss Federal Data Protection and Information Commissioner ([FDPIC/EDÖB](https://www.edoeb.admin.ch)) or with a supervisory authority in your EU/EEA country of residence

To exercise these rights, contact us at: [info@kmupower.com](mailto:info@kmupower.com)

## Children's Privacy

Our website is not directed at children under 16 years of age, and we do not knowingly collect personal information from children.

## Changes to This Privacy Policy

We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated "Last Updated" date.

## External Links

Every curated summary links to its original source on another website. We are not responsible for the privacy practices of those external sites and encourage you to review their own privacy policies.

## Contact Us

If you have questions about this Privacy Policy or want to exercise your rights, contact:

**Marcel Lehmann**
Email: [info@kmupower.com](mailto:info@kmupower.com)
Website: [powerplatformgovernance.com](https://powerplatformgovernance.com)

---

*This Privacy Policy is designed to comply with the GDPR and the Swiss Federal Act on Data Protection (FADP/revDSG). It applies to all visitors of powerplatformgovernance.com.*
