var admin = require('firebase-admin');

var serviceAccount = require('./react-grid-dashboard-1c21a-firebase-adminsdk-rtqex-c262a6272e.json');

var uid = process.argv[2];

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: process.env.REACT_APP_DATABASE_URL,
});

admin.auth().setCustomUserClaims(uid, { admin: true })
  .then(() => {
    console.log('custom claims set for user', uid);
    process.exit()
  })
  .catch(error => {
    console.log(error);
    process.exit(1);
  })
