  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyAWzdusvUPA7wi0ezvxS5UTpl1jL1j2LOY",
    authDomain: "uniben-clearance-guide.firebaseapp.com",
    projectId: "uniben-clearance-guide",
    storageBucket: "uniben-clearance-guide.firebasestorage.app",
    messagingSenderId: "1071781806294",
    appId: "1:1071781806294:web:faae3eb891d1e1b7488977",
    measurementId: "G-850YH7QD5T"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
