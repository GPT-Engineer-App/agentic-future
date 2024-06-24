import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Navbar from "./components/Navbar.jsx";
import AgentManager from './agents/AgentManager';
import BrowsingModule from "./components/BrowsingModule.jsx";
import TerminalAccess from "./components/TerminalAccess.jsx";
import FileManagement from "./components/FileManagement.jsx";
import Sidebar from "./components/Sidebar.jsx"; // Import Sidebar component
import MemoryDisplay from "./components/MemoryDisplay.jsx";
import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  );
}

function App() {
  const agentManager = new AgentManager();
  agentManager.assignTasks();

  return (
    <Router>
      <div className="flex">
        <Sidebar /> {/* Add Sidebar component */}
        <div className="flex-grow">
          <Navbar />
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Routes>
              <Route exact path="/" element={<Index />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/browse" element={<BrowsingModule />} />
              <Route exact path="/terminal" element={<TerminalAccess />} />
              <Route exact path="/file-management" element={<FileManagement />} />
              <Route exact path="/memory" element={<MemoryDisplay />} />
            </Routes>
          </ErrorBoundary>
        </div>
      </div>
    </Router>
  );
}

export default App;