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

The app uses firebase cloud functions to set an admin user by counting the number of registered users at login

by calling a firebase cloud function

To set this up, install firebase tools globally 
`````
npm install -g firebase-tools
`````
login to firebase from the command line
`````
firebase login
`````

then initialise cloud functions for the project in the project root
`````
firebase init functions
`````
use your existing project, language of choice and linting if required




 #### Create a cloud function to set custom claims

In the functions directory (this will have been created in root of the project), open index.js and add the following code 
#### make sure to copy it exactly, the linter used to be hitler in a past life ####
`````
/**
 * Import function triggers from their respective submodules:
 *
 * const { onCall } = require("firebase-functions/v2/https");
 * const { onDocumentWritten } = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

exports.setAdminClaim = functions.https.onCall((data, context) => {
  // Check if the request is made by an authenticated user
  if (!context.auth) {
    throw new functions.https.HttpsError("failed-precondition",
        "The function must be called while authenticated.");
  }

  const uid = data.uid;

  // Set custom user claims
  return admin.auth().setCustomUserClaims(uid, {admin: true})
      .then(() => {
        return {message: `Success! ${uid} has been made an admin.`};
      })
      .catch((error) => {
        throw new functions.https.HttpsError("unknown", error.message, error);
      });
});

exports.listUsers = functions.https.onCall(async (data, context) => {
  // Check if the request is made by an authenticated user
  if (!context.auth) {
    throw new functions.https.HttpsError("failed-precondition",
        "The function must be called while authenticated.");
  }

  const maxResults = 1000; // Maximum allowed by Firebase
  let users = [];
  let nextPageToken;

  try {
    do {
      const listUsersResult = await admin.auth()
          .listUsers(maxResults, nextPageToken);
      users = users.concat(listUsersResult.users);
      nextPageToken = listUsersResult.pageToken;
    } while (nextPageToken);

    return {users: users.map((user) => user.toJSON())};
  } catch (error) {
    throw new functions.https.HttpsError("unknown", error.message, error);
  }
});

`````

Then still on command line, deploy the functions to firebase
`````
firebase deploy --only functions
`````
These 2 functions enable the app to give the first user to sign up admin priviledges 
The app will count the registered users, on login and if there are none it will assign admin to the first person to sign up
This person now has access to the 'manage' menu, and from that control panel can create,read update and delete the site contents, add admin privedges to other users etc

### You will need to upgrade from the spark billing plan to the blaze billing plan in order to use the cloud functions, its either this or build a backend running in node and use the functionality there securely.

## On the first sign in, the user will be automatically made into an admin.
### You will then need to sign out and back in again to access the admin page


