import React, { useState, useEffect } from 'react';
import { fetchModel } from '../utils/huggingface';
import AdvancedMemory from '../memory/AdvancedMemory';

const memory = new AdvancedMemory();

const MemoryDisplay = () => {
  const [memoryState, setMemoryState] = useState({});
  const [model, setModel] = useState(null);

  useEffect(() => {
    // Example usage
    memory.store('exampleKey', 'exampleValue');
    setMemoryState(memory.getAllMemory());
  // Fetch model from Hugging Face
    const loadModel = async () => {
      try {
        const model = await fetchModel('distilbert-base-uncased');
        setModel(model);
      } catch (error) {
        console.error('Error loading model:', error);
      }
    };

    loadModel();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline">Memory State</h1>
      <pre className="mt-4 p-2 border">{JSON.stringify(memoryState, null, 2)}</pre>
    {model && (
        <div className="mt-4">
          <h2 className="text-2xl font-bold">Loaded Model:</h2>
          <pre className="mt-2 p-2 border">{JSON.stringify(model, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default MemoryDisplay;