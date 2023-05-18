import React, { useContext, useEffect, useState } from "react";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";

// Components
import Navbar from "./Navbar";

// Context
import { authContext } from "../context/AuthContextProvider";

// Styles
import styles from "./Chat.module.scss";

document.title = "messenger";

const Chat = () => {
   const navigate = useNavigate();
   const [loading, setLoading] = useState(true);
   const user = useContext(authContext);

   useEffect(() => {
      if (!user) {
         navigate("/login");
         return;
      }

      axios
         .get("https://api.chatengine.io/users/me/", {
            headers: {
               "project-id": "4aecb864-704c-4cde-a1ec-d23c8d232465",
               "user-name": user.email,
               "user-secret": user.uid,
            },
         })
         .then(() => setLoading(false))
         .catch(() => {
            let formData = new FormData();
            formData.append("email", user.email);
            formData.append("username", user.email);
            formData.append("secret", user.uid);

            getImg(user.photoURL).then((avatar) => {
               formData.append("avatar", avatar, avatar.name);

               axios
                  .post("https://api.chatengine.io/users", formData, {
                     headers: {
                        "private-key": "003cf559-f9bc-4b08-bad1-673d96e752dd",
                     },
                  })

                  .then(() => setLoading(false))
                  .catch((error) => console.log(error));
            });
         });
   }, [user, navigate]);

   const getImg = async (url) => {
      const result = await fetch(url);
      const data = await result.blob();
      return new File([data], "photo.jpg", { type: "image/jpeg" });
   };

   const logOutHandler = async () => {
      await auth.signOut();
      navigate("/login");
   };

   if (!user || loading)
      return (
         <div className={styles.container}>
            <div className={styles.spinner}></div>
         </div>
      );

   return (
      <div>
         <Navbar logout={logOutHandler} />

         <ChatEngine
            height="calc(100dvh - 80px)"
            projectID="4aecb864-704c-4cde-a1ec-d23c8d232465
"
            userName={user.email}
            userSecret={user.uid}
         />
      </div>
   );
};

export default Chat;
