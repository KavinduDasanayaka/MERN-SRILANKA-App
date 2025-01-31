import React from "react";

const Begin = () => {
  return (
    <div className="relative w-full h-full">
      {/* Container with image and overlay text */}
      <div className="relative">
        {/* Image */}
        <img
          src="https://images.pexels.com/photos/2937148/pexels-photo-2937148.jpeg?cs=srgb&dl=pexels-shaani-sewwandi-1401278-2937148.jpg&fm=jpg"
          alt="Nature"
          className="w-full h-auto"
        />
        {/* Overlay text */}
        <p className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-9xl font-extrabold px-6 py-6 rounded-xl ">
          Visit<span className="text-yellow-600">S</span>
                <span className="text-red-700">r</span>
                <span className="text-green-700">i</span>
                <span className="text-yellow-500">l</span>
                <span className="text-red-700">a</span>
                <span className="text-yellow-400">n</span>
                <span className="text-red-700">k</span>
                <span className="text-green-600">a</span>
        </p>
      </div>
    </div>
  );
};

export default Begin;
