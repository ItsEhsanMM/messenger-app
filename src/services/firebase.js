import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export const auth = firebase
   .initializeApp({
      apiKey: "AIzaSyBZ9QEK3xfMT_dSr8hC6gKiK34UfW09P5g",
      authDomain: "messenger-47878.firebaseapp.com",
      projectId: "messenger-47878",
      storageBucket: "messenger-47878.appspot.com",
      messagingSenderId: "949967114604",
      appId: "1:949967114604:web:3eabc80407ea88f847e349",
   })
   .auth();
