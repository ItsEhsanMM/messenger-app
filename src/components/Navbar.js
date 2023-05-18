import React from "react";

// Styles
import styles from "./Navbar.module.scss";

const Navbar = ({ logout }) => {
   return (
      <div className={styles.container}>
         <div className={styles.h1Container}>
            <h1>messenger</h1>
         </div>
         <div className={styles.btContainer}>
            <button onClick={logout}>LogOut</button>
         </div>
      </div>
   );
};

export default Navbar;
