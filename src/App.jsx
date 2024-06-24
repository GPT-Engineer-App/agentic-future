import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import AgentManager from './agents/AgentManager';
import BrowsingModule from "./components/BrowsingModule.jsx";

function App() {
  const agentManager = new AgentManager();
  agentManager.assignTasks();

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/browse" element={<BrowsingModule />} />
      </Routes>
    </Router>
  );
}

export default App;