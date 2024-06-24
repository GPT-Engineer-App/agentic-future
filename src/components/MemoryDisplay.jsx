import React, { useState, useEffect } from 'react';
import AdvancedMemory from '../memory/AdvancedMemory';

const memory = new AdvancedMemory();

const MemoryDisplay = () => {
  const [memoryState, setMemoryState] = useState({});

  useEffect(() => {
    // Example usage
    memory.store('exampleKey', 'exampleValue');
    setMemoryState(memory.getAllMemory());
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline">Memory State</h1>
      <pre className="mt-4 p-2 border">{JSON.stringify(memoryState, null, 2)}</pre>
    </div>
  );
};

export default MemoryDisplay;