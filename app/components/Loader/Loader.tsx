import React from "react";

interface LoaderProps {
  title: string;
}

const Loader: React.FC<LoaderProps> = ({ title }) => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">
      <div className="relative w-24 h-24 flex items-center justify-center">
        <div className="w-24 h-24 border-4 border-transparent border-t-black rounded-full animate-spin"></div>
        <div className="absolute w-16 h-16 border-4 border-transparent border-b-gray-700 rounded-full animate-spin-reverse"></div>
        <div className="absolute w-8 h-8 border-4 border-transparent border-l-gray-400 rounded-full animate-spin"></div>
      </div>
      <p className="mt-4 text-lg font-semibold text-black animate-pulse">{title}</p>
    </div>
  );
};

export default Loader;
