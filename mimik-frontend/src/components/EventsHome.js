import React, { useEffect, useState } from "react";
import EventItem from "./eventItem";
import { Link } from "react-router-dom";
function EventsHome() {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("https://event-manager-1mtv.onrender.com/events")
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
    <div className="w-full bg-gray-100 p-4 flex flex-col gap-4 items-center">
      <div className="flex gap-2 text-4xl items-center py-5">
        <div className="h-24 w-24 rounded-full bg-rose-600 text-white flex items-center justify-center">
          <i className="fa-solid fa-heart"></i>
        </div>
        <h1 className="text-gray-700 border-b-2 border-rose-600 font-bold">
          UPCOMING POPULAR EVENTS
        </h1>
      </div>
      <div className="flex w-3/5 justify-evenly flex-wrap items-center m-auto gap-4">
        {/* {Array(6)
          .fill(0)
          .map((e) => (
            <EventItem key={Math.random()} />
          ))} */}
        {events.slice(0, 6).map((event) => (
          <EventItem key={event.id} {...event} />
        ))}
      </div>
      <Link to="/events">
        <button className="bg-rose-600 rounded-lg w-48 p-2 text-white hover:opacity-80">
          <i className="fa-solid fa-calendar-days mr-2"></i>See all Events
          <i className="fa-solid fa-arrow-right ml-1"></i>
        </button>
      </Link>
    </div>
  );
}

export default EventsHome;