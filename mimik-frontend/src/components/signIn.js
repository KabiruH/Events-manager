import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  // const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // POST request to the server with the login details
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          // If login fails, display an error message
          setErrorMsg("Wrong username or password");
        }
      })
      .then((data) => {
        localStorage.setItem("user", JSON.stringify(data));
        // navigate("/events");

        //CHANGE IN PROD
        window.location.href = "http://localhost:3001/events";
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen">
      <form
        className="border w-96 rounded-lg shadow-lg p-4 flex flex-col gap-4"
        onSubmit={handleLogin}
      >
        {" "}
        <br />
        <h1 className="text-center text-2xl text-rose-600">Login Here</h1>
        {errorMsg && <p>{errorMsg}</p>}
        <h3>Email</h3>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border rounded-lg w-full p-3"
            required
          />
        </div>
        <h4>Password</h4>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border rounded-lg w-full p-3"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-rose-600 rounded-lg w-48 p-3 mt-2 text-white hover:opacity-80 m-auto"
        >
          Sign in
        </button>
        <p class="mt-2 text-center text-neutral-800 dark:text-neutral-200">
          Forgot Password?
          <br />{" "}
          <Link
            to="/reset"
            className="text-rose-600 text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            Reset
          </Link>
        </p>
        <p className="mt-2 text-center text-neutral-800 dark:text-neutral-200">
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
    </div>
  );
}
