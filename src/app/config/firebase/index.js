const { initializeApp } = require('firebase/app');
const { getStorage } = require('firebase/storage');

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: process.env.API_KEY,
    projectId: process.env.API_KEY,
    storageBucket: process.env.API_KEY,
    messagingSenderId: process.env.API_KEY,
    appId: process.env.API_KEY,
    measurementId: process.env.API_KEY
  };

  // Initial firebase storage
const firebaseApp = initializeApp(firebaseConfig);
const storage = getStorage(firebaseApp);
