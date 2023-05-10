import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../providers/Auth.provider";
import EventForm from "./EventForm";

export default function AddEvent() {
  const navigate = useNavigate();

  const [message, setMessage] = useState("");

  const { user } = useAuthContext();

  const handleSubmit = async (event) => {
    try {
      const response = await fetch(
        "https://event-manager-1mtv.onrender.com/events",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            ...event,
            user_id: user.user.id,
          }),
        }
      );

      if (response.ok) {
        navigate("/events");
      } else {
        setMessage("Failed to add event. Please try again later.");
      }
    } catch (error) {
      setMessage("Failed to add event. Please try again later.");
    }
  };

  return <EventForm handleSubmit={handleSubmit} errorMsg={message} />;
}