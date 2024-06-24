import React, { useState } from 'react';

const BrowsingModule = () => {
  const [url, setUrl] = useState('');
  const [content, setContent] = useState('');

  const handleBrowse = async () => {
    try {
      const response = await fetch(url);
      const text = await response.text();
      setContent(text);
    } catch (error) {
      console.error('Error fetching the URL:', error);
      setContent('Failed to fetch the URL. Please check the console for more details.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline">Secure Browsing Module</h1>
      <div className="mt-4">
        <input
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Enter URL"
          className="border p-2 w-full"
        />
        <button onClick={handleBrowse} className="mt-2 bg-blue-500 text-white p-2">
          Browse
        </button>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Browsing Results:</h2>
        <pre className="mt-2 p-2 border">{content}</pre>
      </div>
    </div>
  );
};

export default BrowsingModule;