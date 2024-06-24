import React, { useState } from 'react';
import Sandbox from '../sandbox/Sandbox';

const sandbox = new Sandbox();

const FileManagement = () => {
  const [filename, setFilename] = useState('');
  const [content, setContent] = useState('');
  const [fileList, setFileList] = useState(sandbox.listFiles());
  const [message, setMessage] = useState('');

  const handleCreateFile = () => {
    try {
      sandbox.createFile(filename, content);
      setFileList(sandbox.listFiles());
      setMessage(`File ${filename} created successfully.`);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleReadFile = () => {
    try {
      const fileContent = sandbox.readFile(filename);
      setContent(fileContent);
      setMessage(`File ${filename} read successfully.`);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleUpdateFile = () => {
    try {
      sandbox.updateFile(filename, content);
      setMessage(`File ${filename} updated successfully.`);
    } catch (error) {
      setMessage(error.message);
    }
  };

  const handleDeleteFile = () => {
    try {
      sandbox.deleteFile(filename);
      setFileList(sandbox.listFiles());
      setMessage(`File ${filename} deleted successfully.`);
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline">File Management System</h1>
      <div className="mt-4">
        <input
          type="text"
          value={filename}
          onChange={(e) => setFilename(e.target.value)}
          placeholder="Enter filename"
          className="border p-2 w-full"
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Enter file content"
          className="border p-2 w-full mt-2"
        />
        <div className="mt-2 space-x-2">
          <button onClick={handleCreateFile} className="bg-blue-500 text-white p-2">Create</button>
          <button onClick={handleReadFile} className="bg-green-500 text-white p-2">Read</button>
          <button onClick={handleUpdateFile} className="bg-yellow-500 text-white p-2">Update</button>
          <button onClick={handleDeleteFile} className="bg-red-500 text-white p-2">Delete</button>
        </div>
        <div className="mt-4">
          <h2 className="text-2xl font-bold">Files:</h2>
          <ul className="list-disc pl-5">
            {fileList.map((file) => (
              <li key={file}>{file}</li>
            ))}
          </ul>
        </div>
        {message && <div className="mt-4 text-lg text-red-500">{message}</div>}
      </div>
    </div>
  );
};

export default FileManagement;