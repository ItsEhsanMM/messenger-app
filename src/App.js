import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Components
import Login from "./components/Login";
import AuthContextProvider from "./services/context/AuthContextProvider";
import Chat from "./components/Chat";

const App = () => {
   return (
      <div>
         <AuthContextProvider>
            <Routes>
               <Route path="/" element={<Login />} />
               <Route path="/chats" element={<Chat />} />
               <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
         </AuthContextProvider>
      </div>
   );
};

export default App;
