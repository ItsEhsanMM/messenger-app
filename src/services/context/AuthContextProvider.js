import React, { useState, useEffect } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const authContext = React.createContext();

const AuthContextProvider = ({ children }) => {
   const [loading, setLoading] = useState(true);
   const [user, setUser] = useState(false);
   const navigate = useNavigate();

   useEffect(() => {
      auth.onAuthStateChanged((user) => {
         setUser(user);
         setLoading(false);
         if (user) navigate("/chat");
      });
   }, [user, navigate]);

   return <authContext.Provider value={user}>{!loading && children}</authContext.Provider>;
};

export default AuthContextProvider;
