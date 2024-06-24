import React, { useState } from 'react';

const BrowsingModule = () => {
  const [url, setUrl] = useState('');
  const [content, setContent] = useState('');

  const handleInputChange = (e) => {
    setUrl(e.target.value);
  };

  const handleBrowse = async () => {
    try {
      const response = await fetch(`/api/browse?url=${encodeURIComponent(url)}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.text();
      setContent(data);
    } catch (error) {
      console.error('Error fetching the URL:', error);
      setContent('Error fetching the URL');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline">Internet Browsing Module</h1>
      <div className="mt-4">
        <input
          type="text"
          value={url}
          onChange={handleInputChange}
          placeholder="Enter URL"
          className="border p-2 w-full"
        />
        <button
          onClick={handleBrowse}
          className="mt-2 bg-blue-500 text-white p-2 rounded"
        >
          Browse
        </button>
      </div>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Content:</h2>
        <div className="border p-4 mt-2">
          {content}
        </div>
      </div>
    </div>
  );
};

export default BrowsingModule;