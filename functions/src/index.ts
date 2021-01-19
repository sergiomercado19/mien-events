const functions = require('firebase-functions');
const app = require('express')();

// Boards
const { getAllEvents } = require('./apis/events');
app.get('/events', getAllEvents);

exports.api = functions.https.onRequest(app);
