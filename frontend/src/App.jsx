import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// components

import Home from "./pages/home/Home";
import { APP_URL } from "./config";
import Escalate from "./pages/escalate/Escalate";
// import Index from "./pages/index/Index";
import Meetings from "./pages/messages/Messages";
import Settings from "./pages/settings/Settings";
import YourTeam from "./pages/yourTeam/YourTeam";
import OpenProjects from "./pages/Projects/OpenProjects";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={APP_URL.HOME} element={<Home />} />
        <Route path={APP_URL.PROJECTS} element={<OpenProjects />} />
        <Route path={APP_URL.YOUR_TEAM} element={<YourTeam />} />
        <Route path={APP_URL.ESCALATE} element={<Escalate />} />
        {/* <Route path={APP_URL.INDEX} element={<Index />} /> */}
        <Route path={APP_URL.MEETINGS} element={<Meetings />} />
        <Route path={APP_URL.SETTINGS} element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
