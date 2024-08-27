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
