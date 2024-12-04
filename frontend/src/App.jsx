import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components
import Signup from "./pages/signup/Signup";
import Home from "./pages/home/Home";
import Analytics from "./pages/analytics/Analytics";
import { APP_URL } from "./config";
import Messages from "./pages/messages/Messages";
import Designs from "./pages/designs/Designs";
import Credits from "./pages/credits/Credits";
import Meetings from "./pages/meetings/Meetings";
import Wallet from "./pages/credits/Wallet";
import Signin from "./pages/signin/Signin";
import Settings from "./pages/settings/Settings";
import Community from "./pages/community/Community";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={APP_URL.SIGNUP} element={<Signup />} />
        <Route path={APP_URL.SIGNIN} element={<Signin />} />
        <Route path={APP_URL.HOME} element={<Home />} />
        <Route path={APP_URL.MESSAGES} element={<Messages />} />
        <Route path={APP_URL.ANALYTICS} element={<Analytics />} />
        <Route path={APP_URL.DESIGNS} element={<Designs />} />
        <Route path={APP_URL.CREDITS} element={<Credits />} />
        <Route path={APP_URL.WALLET} element={<Wallet />} />
        <Route path={APP_URL.MEETINGS} element={<Meetings />} />
        <Route path={APP_URL.SETTINGS} element={<Settings />} />
        <Route path={APP_URL.COMMUNITY} element={<Community />} />
      </Routes>
    </Router>
  );
}

export default App;
