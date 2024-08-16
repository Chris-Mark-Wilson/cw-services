# CW Property Services main site

when deploying to render, remember to add a 'rewrite rule' in the render settings for the app.

set source to `````./````` set destination to `````/index.html````` and action to `````rewrite`````. this ensures render will serve up the root html file for every endpoint/route allowing react router to handle the routing

cors needs to be enabled in google cloud to enable image deletion. To do this, the gcloud sdk needs to be installed on your machine (preferably in the home directory).
`````
curl -O https://dl.google.com/dl/cloudsdk/channels/rapid/downloads/google-cloud-sdk-367.0.0-linux-x86_64.tar.gz
tar -xf google-cloud-sdk-367.0.0-linux-x86_64.tar.gz
./google-cloud-sdk/install.sh 

`````

Initialise the sdk on the command line
`````
gcloud init

`````


 Then create a cors.json file in your project.

 `````
 echo '[
  {
    "origin": ["*"],
    "method": ["GET", "HEAD", "PUT", "POST", "DELETE"],
    "maxAgeSeconds": 3600
  }
]' > cors.json
 
`````
Next apply the cors configuration

`````
gsutil cors set cors.json gs://your-bucket-name

`````
Verify the configuration

`````
gsutil cors get gs://your-bucket-name

`````

The Oauth 2 clientId credential needs to have an authorised url in th list from where you host your app, or add http://localhost:5173 to the existing list.
The list is in google cloud, apis, your project, credentials, find or create new oAuth 2 client id

in firebase/auth cloud dash board, find email enumeration protection and uncheck it as this is a recen tbreaking change from google. thi stop the app trying to resign the user up again after theyve signed out
