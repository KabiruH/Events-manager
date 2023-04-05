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
    <div class="flex items-center justify-center min-h-screen">
      <form onSubmit={onSubmit} class="w-1/2 bg-dark-rose rounded-lg border">
        {" "}
        <br />
        <h1 class="text-center text-2xl text-rose-600 uppercase">
          {isUpdatePage ? "Update this event" : "Create a new event"}
        </h1>
        {errorMsg && <p>{errorMsg}</p>}
        <h3 className="px-4">Title</h3>
        <br />{" "}
        <div class="relative mb-6 px-4">
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            class="block min-h-[auto] w-full items-center rounded border-2  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="title"
          />
        </div>
        <h3 className="px-4">Image Url</h3>
        <br />{" "}
        <div class="relative mb-6 px-4">
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            class="block min-h-[auto] w-full items-center rounded border-2  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="title"
          />
        </div>
        <h3 className="px-4">Description</h3>
        <br />{" "}
        <div class="relative mb-6 px-4">
          <textarea
            rows="5"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            class="peer block min-h-[auto] w-full items-center rounded border-2  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="desc"
          />
        </div>
        <h4 className="px-4">Location</h4> <br />
        <div class="relative mb-6 px-4" data-te-input-wrapper-init>
          <input
            type="text"
            class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <h4 className="px-4">Age limit</h4> <br />
        <div class="relative mb-6 px-4" data-te-input-wrapper-init>
          <input
            type="text"
            class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="agelim"
            value={ageLimit}
            onChange={(e) => setAgeLimit(e.target.value)}
          />
        </div>
        <h4 className="px-4">Capacity</h4> <br />
        <div class="relative mb-6 px-4" data-te-input-wrapper-init>
          <input
            type="number"
            class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="agelim"
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
          />
        </div>
        <h4 className="px-4">Date</h4> <br />
        <div class="relative mb-6 px-4" data-te-input-wrapper-init>
          <input
            type="datetime-local"
            class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="flex justify-center  py-4 text-white">
          <button
            type="submit"
            class="bg-rose-600 items-center text-center rounded px-6 pt-2.5 pb-2  font-large uppercase shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
            data-te-ripple-init
            data-te-ripple-color="rose"
          >
            {isUpdatePage ? "Update" : "Create"} Event
          </button>
        </div>
      </form>
    </div>
  );
}