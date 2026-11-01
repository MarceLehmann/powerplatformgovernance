---
layout: page
title: "How to import a template"
description: "Video and written steps: save the zip file, import the solution in Power Apps, set connections and environment variables, run the setup flow once, allow the app. About 15 minutes."
permalink: /import/
---

You bought a template or an AdminHelper package and received the e-mail with the zip file. The video shows in about a minute and a quarter how to import it into Power Apps. The example is the Absence template. The basic steps are the same for the other templates, and anything beyond that is in the guide attached to the e-mail.

<video controls preload="none" poster="/assets/img/import/import-video-en-poster.jpg" style="width:100%;height:auto;aspect-ratio:16/9" aria-label="How to import a template into Power Apps">
  <source src="/assets/img/import/import-video-en.mp4" type="video/mp4">
  Your browser does not play the video. The steps are written out below.
</video>

*The voice is an AI voice based on my own voice, subtitles are burned in. The screens are redrawn, the labels match Power Apps in English.*

## The steps

1. **Save the zip file.** Save the zip file from the e-mail to your computer. You do not need to unzip it.
2. **Open the right environment.** Open make.powerapps.com and check in the top right corner that the environment is correct. That is where the template will land.
3. **Import the solution.** Click Solutions on the left, then Import solution. Choose the file and click Next.
4. **Pick the connections.** For every row, choose a connection with the account the flows should run under. If one is missing, create it right in the row.
5. **Fill in the environment variables.** These are the settings of the template, for example your SharePoint site and the e-mail address for error messages. Enter them, then click Import.
6. **Run the setup flow once.** Turn the setup flow on and click Run. It creates what the template needs, for example the SharePoint lists.
7. **Open the app and allow it.** On first start Power Apps asks for your consent. Click Allow. Each person is asked once.

If Next stays grey on the connections page, the existing connections often belong to a different account than the one you are signed in with. Create a new connection in each row.

For AdminHelper, the guide in the e-mail adds one thing: the setup flow F51 prepares the storage folders. Run it before you switch on the other flows. See the [AdminHelper packages](/offers/).
