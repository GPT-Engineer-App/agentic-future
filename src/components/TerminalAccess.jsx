import React, { useState } from 'react';
import DOMPurify from 'dompurify';

const TerminalAccess = () => {
  const [command, setCommand] = useState('');
  const [output, setOutput] = useState('');

  const handleExecute = async () => {
    try {
      const sanitizedCommand = DOMPurify.sanitize(command);
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ command: sanitizedCommand }),
      });
      const result = await response.json();
      setOutput(DOMPurify.sanitize(result.output));
    } catch (error) {
      console.error('Error executing command:', error);
      setOutput('Failed to execute command. Please check the console for more details.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline">Terminal Access Module</h1>
      <div className="mt-4">
        <input
          type="text"
          value={command}
          onChange={(e) => setCommand(e.target.value)}
          placeholder="Enter command"
          className="border p-2 w-full"
        />
        <button onClick={handleExecute} className="mt-2 bg-blue-500 text-white p-2">
          Execute
        </button>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Output:</h2>
        <pre className="mt-2 p-2 border">{output}</pre>
      </div>
    </div>
  );
};

export default TerminalAccess;