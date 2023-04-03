import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddEvent() {

    const navigate = useNavigate();

    const [message, setMessage] = useState("");
    const [event, setEvent] = useState({
        title: "",
        image: "",
        description: "",
        location: "",
        age_limit: "",
        date: "",
        time: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/events", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(event),
            });

            if (response.ok) {
                setMessage("Event added successfully!");
                setEvent({
                    title: "",
                    image: "",
                    description: "",
                    location: "",
                    age_limit: "",
                    time: "",
                })
                navigate("./EventsHome")
             }  
            else {
                setMessage("Failed to add event. Please try again later.");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEvent((prevEvent) => ({
            ...prevEvent,
            [name]: value,
        }));
    };


    return (
        <div
            class="flex items-center justify-center min-h-screen">

            <form onSubmit={handleSubmit}
                class="outline outline-offset-2 outline-pink-500 w-1/4 bg-dark-rose rounded-lg bg-rose-50"> <br />
                <h1 class="text-center text-2xl text-rose-600">Add your event</h1>
                {message && <p>{message}</p>}

                <h3 className="mt-2 text-center">Title</h3>
                <br />  <div class="relative mb-6">

                    <input
                        type="text"
                        class="peer block min-h-[auto] w-full items-center rounded border-2  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="title"
                        value={event.title}
                        onChange={handleChange}
                        required
                    />

                    <label
                        for="exampleInputUsername"
                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >Title
                    </label>

                </div>

                <br />  <div class="relative mb-6">

                    <input
                        type="url"
                        class="peer block min-h-[auto] w-full items-center rounded border-2  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="image"
                        name="image"
                        value={event.image}
                        onChange={handleChange}
                        required
                    />

                    <label
                        htmlFor="image"
                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >ImageURL
                    </label>

                </div>

                <h3 className="mt-2 text-center">Description</h3>
                <br />
                <div class="relative mb-6">

                    <textarea
                        id="description"
                        name="description"
                        value={event.description}
                        onChange={handleChange}
                        class="peer block min-h-[auto] w-full items-center rounded border-2  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        required
                    />



                </div>
                <h4 className="mt-2 text-center">Location</h4>  <br />
                <div class="relative mb-6" data-te-input-wrapper-init>
                    <input

                        class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        type="text"
                        id="location"
                        name="location"
                        value={event.location}
                        onChange={handleChange}

                    />
                    <label
                        for="exampleInputPassword2"
                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >Location</label>
                </div>

                <h4 className="mt-2 text-center">Age limit</h4>  <br />
                <div class="relative mb-6" data-te-input-wrapper-init>
                    <input
                        type="number"
                        class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        name="ageLimit"
                        value={event.age_limit}
                        onChange={handleChange}
                        required

                    />
                    <label
                        for="exampleInputPassword2"
                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >Age limit</label>
                </div>

                <h4 className="mt-2 text-center">Date</h4>  <br />
                <div class="relative mb-6" data-te-input-wrapper-init>
                    <input

                        class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        type="date"
                        name="date"
                        value={event.date}
                        onChange={handleChange}
                        required

                    />
                    
                </div>

                <h4 className="mt-2 text-center">Time</h4>  <br />
                <div class="relative mb-6" data-te-input-wrapper-init>
                    <input
                        type="time"
                        class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="time"
                        name="time"
                        value={event.time}
                        onChange={handleChange}
                        required

                    />
                    
                </div>

                <button
                    type="submit"
                    class="bg-rose-600 items-center text-center rounded px-6 pt-2.5 pb-2 text-xs font-large uppercase shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init
                    data-te-ripple-color="rose">
                    Add Event
                </button>
            </form>
        </div>
    )
}