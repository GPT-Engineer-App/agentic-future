import React, { useState } from 'react';
import Sidebar from 'react-sidebar';

const SidebarComponent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [aiProvider, setAiProvider] = useState('OpenAI');
  const [temperature, setTemperature] = useState(0.7);
  const [maxTokens, setMaxTokens] = useState(100);

  const handleSidebarToggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <Sidebar
      sidebar={
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">AI Agent Settings</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">AI Provider</label>
            <select
              value={aiProvider}
              onChange={(e) => setAiProvider(e.target.value)}
              className="border p-2 w-full"
            >
              <option value="OpenAI">OpenAI</option>
              <option value="GPT-3">GPT-3</option>
              <option value="GPT-4">GPT-4</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Temperature</label>
            <input
              type="number"
              value={temperature}
              onChange={(e) => setTemperature(e.target.value)}
              className="border p-2 w-full"
              min="0"
              max="1"
              step="0.1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Max Tokens</label>
            <input
              type="number"
              value={maxTokens}
              onChange={(e) => setMaxTokens(e.target.value)}
              className="border p-2 w-full"
              min="1"
              max="1000"
            />
          </div>
        </div>
      }
      open={sidebarOpen}
      onSetOpen={handleSidebarToggle}
      styles={{ sidebar: { background: "white", width: "300px" } }}
    >
      <button onClick={handleSidebarToggle} className="p-2 bg-blue-500 text-white">
        Toggle Sidebar
      </button>
    </Sidebar>
  );
};

export default SidebarComponent;