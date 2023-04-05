import React from "react";
import { Link } from "react-router-dom";
import formatDate from "../utilities/formatdate";

export default function EventItem({ title, location, date, id, image }) {
  return (
    <div class="w-72 mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div>
        <img
          className="w-72 h-72"
          src={image || "/assets/pexels-luis-quintero-2774556.jpg"}
          alt=""
        />
      </div>
      <div class="bg-gray-100 px-4 py-2 flex justify-between items-center">
        <h2 class="text-lg font-bold text-gray-800 text-center w-full">
          {title}
        </h2>
      </div>
      <div class="px-4 py-2 flex  flex-col gap-4">
        <div className="flex gap-2">
          <p>Location:</p>
          <p className="font-bold">{location}</p>
        </div>
        <div className="flex gap-2">
          <p>Date:</p>
          <p className="font-bold">{formatDate(date)}</p>
        </div>
        <Link to={`/EventDetails/${id}`}>
          <button class="bg-rose-600 hover:opacity-80 text-white px-4 py-2 rounded-lg">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
}