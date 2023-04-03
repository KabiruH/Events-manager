import React, { useState } from "react";

export default function UpdateEvent() {


    const [title, setTitle] = useState("");
  
    const [description, setDescription] = useState("");
    const [location, setLocation] = useState("");
    const [ageLimit, setAgeLimit] = useState("");
    const [time, setTime] = useState("");
    const [date, setDate] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleUpdateEvent = async (e) => {
        e.preventDefault();
        const eventDetails = { title, description, location, ageLimit, time };
        try {
            const response = await fetch( 'http://localhost:3000/events/:id', {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(eventDetails),
            });
            if (response.ok) {
                // handle success case
                console.log("Event updated successfully!");
            } else {
                // handle error case
                setErrorMsg("Failed to update event.")

            }
        } catch (error) {
            console.error("An error occurred while updating the event:", error);
        }
    };

    return (
        <div
            class="flex items-center justify-center min-h-screen">

            <form 
                onSubmit={handleUpdateEvent}
            class="outline outline-offset-2 outline-pink-500 w-1/4 bg-dark-rose rounded-lg bg-rose-50"> <br />
                <h1 class="text-center text-2xl text-rose-600">Update this event</h1>
                {errorMsg && <p>{errorMsg}</p>}


                <h3 className="mt-2 text-center">Title</h3>
                <br />  <div class="relative mb-6">

                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        class="peer block min-h-[auto] w-full items-center rounded border-2  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="title"
                    />

                    <label
                        for="exampleInputUsername"
                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >Title
                    </label>

                </div>

                <h3 className="mt-2 text-center">Description</h3>
                <br />  <div class="relative mb-6">

                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        class="peer block min-h-[auto] w-full items-center rounded border-2  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="desc"
                    />

                    <label
                        for="exampleInputPassword2"
                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >Description
                    </label>

                </div>
                <h4 className="mt-2 text-center">Location</h4>  <br />
                <div class="relative mb-6" data-te-input-wrapper-init>
                    <input
                        type="text"
                        class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="location"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
                    <label
                        for="exampleInputPassword2"
                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >Location</label>
                </div>

                <h4 className="mt-2 text-center">Age limit</h4>  <br />
                <div class="relative mb-6" data-te-input-wrapper-init>
                    <input
                        type="integer"
                        class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="agelim"
                        value={ageLimit}
                        onChange={(e) => setAgeLimit(e.target.value)}

                    />
                    <label

                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >Age limit</label>
                </div>

                <h4 className="mt-2 text-center">Date</h4>  <br />
                <div class="relative mb-6" data-te-input-wrapper-init>
                    <input
                        type="date"
                        class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}

                    />
                    <label
                        for="date"
                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >Date</label>
                </div>

                <h4 className="mt-2 text-center">Time</h4>  <br />
                <div class="relative mb-6" data-te-input-wrapper-init>
                    <input
                        type="time"
                        class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="time"
                        value={time}
                        onChange={(e) => setTime(e.target.value)}

                    />
                    <label
                        for="time"
                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >Time</label>
                </div>

                <button
                    type="submit"
                    class="bg-rose-600 items-center text-center rounded px-6 pt-2.5 pb-2 text-xs font-large uppercase shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init
                    data-te-ripple-color="rose">
                    Update Event
                </button>
            </form>
        </div>
    )
}