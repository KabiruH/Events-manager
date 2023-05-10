import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EventForm from "./EventForm";

export default function UpdateEvent() {
  const [errorMsg, setErrorMsg] = useState("");
  const { id } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const getEvent = async () => {
      const response = await fetch(
        `https://event-manager-1mtv.onrender.com/events/${id}`
      );
      const data = await response.json();
      setEvent(data);
    };
    getEvent();
  }, [id]);

  const handleUpdateEvent = async (eventDetails) => {
    try {
      const response = await fetch(
        `https://event-manager-1mtv.onrender.com/events/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(eventDetails),
        }
      );
      if (response.ok) {
        // handle success case
        navigate(`/events`);
        console.log("Event updated successfully!");
      } else {
        // handle error case
        setErrorMsg("Failed to update event.");
      }
    } catch (error) {
      console.error("An error occurred while updating the event:", error);
    }
  };

  return (
    <>
      {event && (
        <EventForm
          isUpdatePage={true}
          eventData={event}
          errorMsg={errorMsg}
          handleSubmit={handleUpdateEvent}
        />
      )}
    </>
  );
}