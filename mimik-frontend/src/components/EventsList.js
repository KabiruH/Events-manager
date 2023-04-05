import React, { useEffect, useState } from "react";
import EventItem from "./eventItem";
import { Link } from "react-router-dom";

const EventsList = () => {
  const [events, setEvents] = useState([]);
  // get all events
  useEffect(() => {
    fetch("http://localhost:3000/events")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setEvents(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return (
    <div className="w-3/4 m-auto p-4 flex flex-col gap-4 min-h-screen">
      <div className="flex gap-2 text-4xl items-center py-5 mx-auto">
        <div className="h-24 w-24 rounded-full bg-rose-600 text-white flex items-center justify-center">
          <i className="fa-solid fa-heart"></i>
        </div>
        <h1 className="text-gray-700 border-b-2 border-rose-600 font-bold">
          UPCOMING EVENTS
        </h1>
      </div>

      <div className="flex items-center justify-between w-full">
        <div className="border px-4 py-2 rounded-full flex-1 mr-10 flex justify-between items-center">
          <input placeholder="search events" className="flex-1 outline-none" />
          <i className="fa-solid fa-magnifying-glass text-gray-500"></i>
        </div>
        <Link to="/addEvent">
          <button className="bg-rose-600 hover:bg-opacity-80 text-white px-4 py-2 rounded-lg">
            + Add event
          </button>
        </Link>
      </div>

      <div className="flex flex-wrap  gap-4 ">
        {/* {Array(20)
          .fill(0)
          .map((e) => (
            <EventItem key={Math.random()} />
          ))} */}
        {events.map((event) => (
          <EventItem key={event.id} {...event} />
        ))}
      </div>
    </div>
  );
};
export default EventsList;