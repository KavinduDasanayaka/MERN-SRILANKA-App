import React from "react";
import {Link} from "react-router-dom"

function LocationCard({ data }) {
  return (

    <div className=" hover:border-2 border-cyan-600 inline-block">
          <Link to={`/location/${data._id}`}>
          <div className="bg-gray-800 shadow-lg rounded-2xl p-4 max-w-sm text-white">
      <img
        src={data.image.replace(/\\/g, "/")} 
        alt={data.name}
        className="w-full h-48 object-cover rounded-lg"
      />


      <div className="mt-4">
        <h2 className="text-xl font-semibold">{data.name}</h2>
        <p className="text-sm text-gray-400 mt-1 whitespace-normal break-words">{data.detail}</p>

        <div className="flex justify-between items-center mt-3">
          <span className="text-sm bg-gray-700 px-3 py-1 rounded-lg">
            {data.type}
          </span>
          <span className="text-sm text-yellow-400">
          Score: {data.score} 
          </span>
        </div>
      </div>
    </div>
    </Link>

    </div>


  );
}

export default LocationCard;
