import firebase from 'firebase';

  var config = {
    apiKey: "AIzaSyCTdKPEg78xaerKUtJiF2k0OTrpCvJx4EM",
    authDomain: "react-d71c6.firebaseapp.com",
    databaseURL: "https://react-d71c6.firebaseio.com",
    projectId: "react-d71c6",
    storageBucket: "react-d71c6.appspot.com",
    messagingSenderId: "617324447934",
    appId: "1:617324447934:web:158ffad79f2b7ecd0ab6ef",
    measurementId: "G-5XFF7ZT6C1"
  };

  const fire=firebase.initializeApp(config);
  export default fire;