# CW Property Services main site

when deploying to render, remember to add a 'rewrite rule' in the render settings for the app.

set source to `````./````` set destination to `````/index.html````` and action to `````rewrite`````. this ensures render will serve up the root html file for every endpoint/route allowing react router to handle the routing


