import React from 'react';
import { FaPlus } from "react-icons/fa"; // example - use react-icons/fa for icons

const Index = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold underline">
        Welcome to the Cutting-Edge Web App! <FaPlus />
      </h1>
      <p className="mt-4 text-lg">
        This is the home page of our innovative web application. Navigate through the site using the links above to explore more.
      </p>
      <img src="/images/homepage-banner.jpg" alt="Homepage Banner" className="mt-4 w-full h-auto" />
    </div>
  );
};

export default Index;