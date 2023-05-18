import React, { useState, useEffect } from "react";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

export const authContext = React.createContext();

const AuthContextProvider = ({ children }) => {
   const [loading, setLoading] = useState(true);
   const [user, setUser] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      auth.onAuthStateChanged((user) => {
         setUser(user);
         console.log(user);
         setLoading(false);
         if (user) navigate("/chats");
      });
   }, [user, navigate]);

   return <authContext.Provider value={user}>{!loading && children}</authContext.Provider>;
};

export default AuthContextProvider;
