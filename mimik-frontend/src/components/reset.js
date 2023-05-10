import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ResetPassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleResetPassword = async (event) => {
    event.preventDefault();

    const response = await fetch(
      "https://event-manager-1mtv.onrender.com/users/:id",
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      setMessage(data.message);
      setEmail("");
      setPassword("");
    } else {
      setMessage("Reset password failed. Please try again later.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        onSubmit={handleResetPassword}
        className="border w-96 rounded-lg shadow-lg p-4 flex flex-col gap-4"
      >
        <h1 className="text-center text-2xl text-rose-600">Reset Password</h1>
        <h3>Enter Email</h3>
        <div>
          <input
            type="email"
            className="border rounded-lg w-full p-3"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <button className="bg-gray-600 rounded-lg w-48 p-3 mt-2 text-white hover:opacity-80 m-auto">
          Get Token
        </button>
        <h3>Enter Token</h3>
        <div>
          <input
            type="password"
            className="border rounded-lg w-full p-3"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <h3>Enter New Password</h3>
        <div>
          <input
            type="password"
            className="border rounded-lg w-full p-3"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button
          type="submit"
          className="bg-rose-600 rounded-lg w-48 p-3 mt-2 text-white hover:opacity-80 m-auto"
        >
          Reset
        </button>
        <p class="mt-2 text-center text-neutral-800 dark:text-neutral-200">
          Not a member?
          <br />{" "}
          <Link
            to="/signUp"
            className="text-rose-600 text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            Register
          </Link>
        </p>
      </form>
      <p>{message}</p>
    </div>
  );
}