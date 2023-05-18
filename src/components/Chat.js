import React from "react";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";

// Components
import Navbar from "./Navbar";

document.title = "messenger";

const Chat = () => {
   const navigate = useNavigate();

   const logOutHandler = async () => {
      await auth.signOut();
      navigate("/");
   };
   return (
      <div>
         <Navbar logout={logOutHandler} />

         <ChatEngine
            height="calc(100dvh - 80px)"
            projectID="4aecb864-704c-4cde-a1ec-d23c8d232465
"
            userName="."
            userSecret="."
         />
      </div>
   );
};

export default Chat;
