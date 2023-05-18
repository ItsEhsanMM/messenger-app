import React from "react";
import firebase from "firebase/compat/app";
import { auth } from "../services/firebase";

// Icons
import google from "../assets/google.svg";

// Styles
import styles from "./Login.module.scss";

document.title = "Login Page";

const Login = () => {
   return (
      <div className={styles.container}>
         <div className={styles.aContainer}>
            <div className={styles.welcome}>
               <h1>welcome to messenger</h1>
            </div>
            <div className={styles.loginMethods}>
               <div className={styles.paragraph}>
                  <h3>Login with :</h3>
               </div>
               <div
                  onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
                  className={styles.logoContainer}
               >
                  <img src={google} alt="google" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Login;
