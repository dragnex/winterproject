// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBRooS0PEQDAKh-8Ku6RXe8Q7B2tePDYlM",
    authDomain: "mechanation-9b600.firebaseapp.com",
    databaseURL: "https://mechanation-9b600-default-rtdb.firebaseio.com",
    projectId: "mechanation-9b600",
    storageBucket: "mechanation-9b600.appspot.com",
    messagingSenderId: "6514011858",
    appId: "1:6514011858:web:97cf158d9af23cc110870b",
    measurementId: "G-656LD2R27D"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  let db = firebase.firestore();