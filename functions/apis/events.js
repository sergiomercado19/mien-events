const { Firestore } = require('@google-cloud/firestore');
const { db } = require('../utils/admin');

// Returns the public data of all the events that are currently active.
exports.getActiveEvents = async (request, response) => {
  const query = db.collection('events').where('active', '==', true);
  const results = await query.get().catch(() => {
    return response.status(500).json({ errors: err.code });
  });

  const events = [];
  results.forEach((doc) => {
    events.push({
      id: doc.id,
      title: doc.data().title,
      description: doc.data().description,
      location: doc.data().location,
      time: {
        start: doc.data().time.start.seconds,
        end: doc.data().time.end.seconds,
      }
    });
  });
  return response.json(events);
};
