// Google Cloud API for kupulele rest functions
const { https } = require("firebase-functions");
const { initializeApp } = require('firebase-admin/app');
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const dbcol = "butterflies"

initializeApp({
    projectId: process.env.FIREBASE_PROJECT_ID,
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
});

const app = express();

function removeKupu(path) {
  return function(req, res, next) {
    const orgUrl = req.url; // stash original URL
    // do nothing if not on cloudfunctions.net or path doesn't match
    if (!orgUrl.startsWith(path)) {
      return next();
    }
    // if here, trim path off of the request's URL
    req.url = req.originalUrl = orgUrl.slice(path.length);
    // hand over to other app.get(), app.use(), etc.
    next('route');
  }
}

app.use(removeKupu("/kupu"));

app.get("/", async (req, res) => {
  const snapshot = await admin.firestore().collection("butterflies").get();

  let butterflies = [];
  snapshot.forEach((doc) => {
    let id = doc.id;
    let data = doc.data();

    butterflies.push({ id, ...data });
  });

  res.status(200).send(JSON.stringify(butterflies));
});

app.get("/:id", async (req, res) => {

    const snapshot = await admin.firestore().collection('butterflies').doc(req.params.id).get();

    const butterflyId = snapshot.id;
    const butterflyData = snapshot.data();

    res.status(200).send(JSON.stringify({id: butterflyId, ...butterflyData}));
})

app.post("/", async (req, res) => {
  const butterfly = req.body;

  await admin.firestore().collection("butterflies").add(butterfly);

  res.status(201).send();
});

app.put("/:id", async (req, res) => {
    const body = req.body;

    await admin.firestore().collection('butterflies').doc(req.params.id).update(body);

    res.status(200).send()
});

app.delete("/:id", async (req, res) => {
    await admin.firestore().collection("butterflies").doc(req.params.id).delete();

    res.status(200).send();
})

exports.kupu = functions.https.onRequest(app);
