import React from "react";
import { Link } from "react-router-dom";

export default function EventItem() {
  return (
    <div class="w-72 mx-auto bg-white rounded-xl shadow-md overflow-hidden">
      <div>
        <img src="/assets/pexels-luis-quintero-2774556.jpg" alt="" />
      </div>
      <div class="bg-gray-100 px-4 py-2 flex justify-between items-center">
        <h2 class="text-lg font-bold text-gray-800 text-center w-full">
          Women in Tech
        </h2>
      </div>
      <div class="px-4 py-2 flex  flex-col gap-4">
        <div className="flex gap-2">
          <p>Location:</p>
          <p className="font-bold">Kenya cinema</p>
        </div>
        <div className="flex gap-2">
          <p>Date:</p>
          <p className="font-bold">July, 15 2023</p>
        </div>
        <Link to="/EventDetails/1">
          <button class="bg-rose-600 hover:opacity-80 text-white px-4 py-2 rounded-lg">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
}
