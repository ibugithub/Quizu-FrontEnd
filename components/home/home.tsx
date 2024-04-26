import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4 text-gray-800">Welcome to Springo</h1>
        <p className="text-lg mb-8 text-gray-600">Share your stories with the world</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Read Stories</h2>
            <p className="text-gray-600">Discover a world of captivating stories written by talented authors from all walks of life.</p>
            <a href="/stories" className="block mt-6 text-blue-600 hover:underline">Explore Stories</a>
          </div>
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Publish Your Story</h2>
            <p className="text-gray-600">Share your own stories with the community and get feedback from fellow writers.</p>
            <a href="/uploadStory" className="block mt-6 text-blue-600 hover:underline">Get Started</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
