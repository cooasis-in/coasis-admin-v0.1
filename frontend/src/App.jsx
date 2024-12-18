import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components

import Home from "./pages/home/Home";
import { APP_URL } from "./config";
import Escalate from "./pages/escalate/Escalate";
import Meetings from "./pages/messages/Messages";
import Settings from "./pages/settings/Settings";
import OpenProjects from "./pages/Projects/OpenProjects";
import ClosedProjects from "./pages/Projects/ClosedProjects";
import Creators from "./pages/yourTeam/Creators";
import Brands from "./pages/yourTeam/Brands";
import Chat from "./pages/Index/Chat";
import SignUp from "./pages/signUp/SignUp";
import Signin from "./pages/signIn/SignIn";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={APP_URL.SIGNUP} element={<SignUp />} />
        <Route path={APP_URL.SIGNIN} element={<Signin />} />
        <Route path={APP_URL.HOME} element={<Home />} />
        <Route path={APP_URL.PROJECTS} element={<OpenProjects />} />
        <Route path={APP_URL.OPENPROJECTS} element={<OpenProjects />} />
        <Route path={APP_URL.CLOSEDPROJECTS} element={<ClosedProjects />} />
        <Route path={APP_URL.CREATORS} element={<Creators />} />
        <Route path={APP_URL.INDEX} element={<Chat />} />
        <Route path={APP_URL.BRANDS} element={<Brands />} />
        <Route path={APP_URL.ESCALATE} element={<Escalate />} />
        <Route path={APP_URL.MEETINGS} element={<Meetings />} />
        <Route path={APP_URL.SETTINGS} element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
