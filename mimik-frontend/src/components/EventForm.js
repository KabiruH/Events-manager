import React, { useState } from "react";

export function formatDateTime(_date) {
  const date = new Date(_date); // Get the current date and time
  const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${date.getDate().toString().padStart(2, "0")}T${date
    .getHours()
    .toString()
    .padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;

  return formattedDate;
}

export default function EventForm({
  isUpdatePage = false,
  eventData = undefined,
  errorMsg,
  handleSubmit,
}) {
  console.log(eventData);

  const [title, setTitle] = useState(eventData?.title || "");

  const [description, setDescription] = useState(eventData?.description || "");
  const [location, setLocation] = useState(eventData?.location || "");
  const [ageLimit, setAgeLimit] = useState(eventData?.age_limit || "");
  const [date, setDate] = useState(
    eventData?.date ? formatDateTime(eventData?.date) : null
  );

  const [image, setImage] = useState(eventData?.image || "");

  const [capacity, setCapacity] = useState(eventData?.capacity || "");

  const onSubmit = (e) => {
    e.preventDefault();
    handleSubmit({
      location,
      age_limit: ageLimit,
      title: title,
      description,
      date: new Date(date),
      image,
      capacity,
    });
  };

  return (
    <div className="flex items-center justify-center min-h-screen mb-5">
      <form
        onSubmit={onSubmit}
        className="w-1/2 border rounded-lg shadow-lg p-4 flex flex-col gap-4"
      >
        <h1 className="text-center text-2xl text-rose-600 uppercase">
          {isUpdatePage ? "Update this event" : "Create a new event"}
        </h1>
        {errorMsg && (
          <p className="text-center text-xl text-red-500">{errorMsg}</p>
        )}
        <h3>Title</h3>
        <div>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border rounded-lg w-full p-3 text-gray-700"
          />
        </div>
        <h3>Image Url</h3>
        <div>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="border rounded-lg w-full p-3 text-gray-700"
          />
        </div>
        <h3>Description</h3>
        <div>
          <textarea
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="border rounded-lg w-full text-gray-700"
          />
        </div>
        <h3>Location</h3>
        <div>
          <input
            type="text"
            className="border rounded-lg w-full p-3 text-gray-700"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <h3>Age limit</h3>
        <div>
          <input
            type="text"
            className="border rounded-lg w-full p-3 text-gray-700"
            value={ageLimit}
            onChange={(e) => setAgeLimit(e.target.value)}
          />
        </div>
        <h3>Capacity</h3>
        <div>
          <input
            type="number"
            className="border rounded-lg w-full p-3 text-gray-700"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
        </div>
        <h3>Date</h3>
        <div>
          <input
            type="datetime-local"
            className="border rounded-lg w-full p-3 text-gray-700"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button
          type="submit"
          className="bg-rose-600 rounded-lg w-48 p-3 mt-2 text-white hover:opacity-80 m-auto"
        >
          {isUpdatePage ? "Update" : "Create"} Event
        </button>
      </form>
    </div>
  );
}