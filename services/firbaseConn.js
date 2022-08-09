const firebase = require('firebase');

const firebaseConfig = {
    apiKey: "AIzaSyBBXEJdZEu21MTAeUyTnUgkT-BpL-C5tbc",
    authDomain: "teste-co3d.firebaseapp.com",
    projectId: "teste-co3d",
    storageBucket: "teste-co3d.appspot.com",
    messagingSenderId: "1041518736731",
    appId: "1:1041518736731:web:9c857784f048a25236d67e",
    measurementId: "G-GMZTQ2LX1J"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

module.exports=firebase;