import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-white text-blue-950 py-4">
      <div className="container mx-auto px-4 flex flex-col items-center">
          <h3 className="text-lg font-semibold mb-2">Springo</h3>
          <p className=" mb-4">A platform for sharing and discovering stories from around the world.</p>
        <div className="text-center text-sm ">
          <p>&copy; {new Date().getFullYear()} Springo. All rights reserved.</p>
          <p className="mt-2">Designed with ❤️ by Ummey Meher Jahan</p>
        </div>
      </div>
    </footer>
  );
};

