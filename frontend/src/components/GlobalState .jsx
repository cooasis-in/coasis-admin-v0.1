// EmailContext.js
import React, { createContext, useState } from "react";

export const GlobalContext = createContext();

export const GlobalState = ({ children }) => {
  const [email, setEmail] = useState(""); // State to hold the email
  const [emailOpt, setEmailOpt] = useState(""); // State to hold the otp
  const [comName, setComName] = useState(""); // State to hold the company name
  const [comFlag, setComFlag] = useState(""); // State to hold the company country
  return (
    <GlobalContext.Provider
      value={{
        email,
        setEmail,
        emailOpt,
        setEmailOpt,
        comName,
        setComName,
        comFlag,
        setComFlag,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
