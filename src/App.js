import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

// Components
import Login from "./components/Login";
import AuthContextProvider from "./context/AuthContextProvider";
import Chat from "./components/Chat";

const App = () => {
   return (
      <div>
         <AuthContextProvider>
            <Routes>
               <Route path="/chats" element={<Chat />} />
               <Route path="/login" element={<Login />} />
               <Route path="/*" element={<Navigate to="/login" />} />
            </Routes>
         </AuthContextProvider>
      </div>
   );
};

export default App;
