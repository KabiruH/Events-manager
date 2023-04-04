import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  function handleFormSubmit(event) {
    event.preventDefault();

    const userDetails = {
      username: username,
      email: email,
      password: password,
      age: age,
      gender: gender,
    };

    fetch("http://127.0.0.1:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userDetails),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Registration failed. Please try again later.");
        }
        navigate("/signIn");
        // Registration successful, navigate to home page or display success message
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  return (
    <div class="flex items-center justify-center min-h-screen">
      {errorMessage && <div>{errorMessage}</div>}

      <form
        onSubmit={handleFormSubmit}
        class="outline outline-offset-2 outline-pink-500 w-1/4 bg-dark-rose rounded-lg bg-rose-50"
      >
        {" "}
        <br />
        <h1 class="text-center text-2xl text-rose-600">Sign Up Here</h1>
        {errorMessage && <div>{errorMessage}</div>}
        <h3 className="mt-2 text-center">Username</h3>
        <br />{" "}
        <div class="relative mb-6">
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            class="peer block min-h-[auto] w-full items-center rounded border-2  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="username"
            required
          />
        </div>
        <h3 className="mt-2 text-center">Email</h3>
        <br />{" "}
        <div class="relative mb-6">
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            class="peer block min-h-[auto] w-full items-center rounded border-2  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="emali"
            required
          />
        </div>
        <h4 className="mt-2 text-center">Password</h4> <br />
        <div class="relative mb-6" data-te-input-wrapper-init>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="pass"
            required
          />
        </div>
        <h4 className="mt-2 text-center">Age</h4> <br />
        <div class="relative mb-6" data-te-input-wrapper-init>
          <input
            onChange={(event) => setAge(event.target.value)}
            value={age}
            type="number"
            min="0"
            max="100"
            class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="age"
            required
          />
        </div>
        <h4 className="mt-2 text-center">Gender</h4> <br />
        <div class="relative mb-7" data-te-input-wrapper-init>
          <select
            value={gender}
            onChange={(event) => setGender(event.target.value)}
            id="gender"
            name="gender"
          >
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <button
          type="submit"
          class="bg-rose-600 items-center text-center rounded px-6 pt-2.5 pb-2 text-xs font-large uppercase shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          data-te-ripple-init
          data-te-ripple-color="rose"
        >
          Sign Up
        </button>
        <p class="mt-2 text-center text-neutral-800 dark:text-neutral-200">
          Already have an account?
          <br />{" "}
          <Link
            to="/signIn"
            class="text-rose-600 text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            Login Here
          </Link>
        </p>
      </form>
    </div>
  );
}
