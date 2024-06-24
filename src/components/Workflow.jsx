import React from 'react';

const Workflow = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline">AI Agent Workflow</h1>
      <p className="mt-4 text-lg">
        This page demonstrates the workflow of our AI agents in the software development process.
      </p>
      <div className="mt-4">
        <h2 className="text-2xl font-bold">Workflow Steps:</h2>
        <ol className="list-decimal pl-5 mt-2">
          <li>Design Architecture: The Software Architect agent designs the overall architecture of the software system.</li>
          <li>Implement Frontend: The Full-Stack Developer agent implements the front-end components of the system.</li>
          <li>Implement Backend: The Full-Stack Developer agent implements the back-end components of the system.</li>
          <li>Test System: The Quality Assurance Engineer agent tests the software system to ensure it meets quality standards.</li>
          <li>Report Bugs: The Quality Assurance Engineer agent identifies and reports bugs and issues.</li>
        </ol>
      </div>
    </div>
  );
};

export default Workflow;