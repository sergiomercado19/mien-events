const functions = require('firebase-functions');
const app = require('express')();

// Events
const { getActiveEvents } = require('./apis/events');
app.get('/events', getActiveEvents);

exports.api = functions.https.onRequest(app);
