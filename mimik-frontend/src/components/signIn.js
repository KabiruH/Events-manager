import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

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
<<<<<<< HEAD
    return (

        <div
            class="flex items-center justify-center min-h-screen">
              {errorMsg && <p>{errorMsg}</p>}  
            <form class="outline outline-offset-2 outline-pink-500 w-1/4 bg-dark-rose rounded-lg bg-rose-50"
                    onSubmit={handleLogin}> <br/>
          <h1 class = "text-center text-2xl text-rose-600">Login Here</h1>
            <h3 className="mt-2 text-center">Email</h3> 
              <br/>  <div class="relative mb-6">
                
                  <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        class="peer block min-h-[auto] w-full items-center rounded border-2  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInputEmail2"
                        required
                        />
                        
                    <label
                        for="exampleInputEmail"
                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >Email
                    </label>
                    
                </div>
                <h4 className="mt-2 text-center">Password</h4>  <br/>
                <div class="relative mb-6" data-te-input-wrapper-init>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleInputPassword2"
                        required
                        />
                    <label
                        for="exampleInputPassword2"
                        class="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-neutral-200"
                    >Password</label>
                </div>
                
                <button
                    type="submit"
                    class="bg-rose-600 items-center text-center rounded px-6 pt-2.5 pb-2 text-xs font-large uppercase shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                    data-te-ripple-init
                    data-te-ripple-color="rose">
                    Sign in
                </button>
                
                <p class="mt-2 text-center text-neutral-800 dark:text-neutral-200">
                    Forgot Password?
                  <br/>  <Link to="/reset"
                        class="text-rose-600 text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                    >Reset</Link>
                </p>

                <p class="mt-2 text-center text-neutral-800 dark:text-neutral-200">
                    Not a member?
                  <br/>  <Link to="/signUp"
                        class="text-rose-600 text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
                    >Register</Link>
                </p>  
            </form>
=======
  return (
    <div class="flex items-center justify-center min-h-screen">
      <form
        class="outline outline-offset-2 outline-pink-500 w-1/4 bg-dark-rose rounded-lg bg-rose-50"
        onSubmit={handleLogin}
      >
        {" "}
        <br />
        <h1 class="text-center text-2xl text-rose-600">Login Here</h1>
        {errorMsg && <p>{errorMsg}</p>}
        <h3 className="mt-2 text-center">Email</h3>
        <br />{" "}
        <div class="relative mb-6">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            class="peer block min-h-[auto] w-full items-center rounded border-2  bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInputEmail2"
            required
          />
>>>>>>> 7229612c0df2d258706a36e67593b35d1ba43a40
        </div>
        <h4 className="mt-2 text-center">Password</h4> <br />
        <div class="relative mb-6" data-te-input-wrapper-init>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            class="peer block min-h-[auto] w-full rounded border-2 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleInputPassword2"
            required
          />
        </div>
        <button
          type="submit"
          class="bg-rose-600 items-center text-center rounded px-6 pt-2.5 pb-2 text-xs font-large uppercase shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
          data-te-ripple-init
          data-te-ripple-color="rose"
        >
          Sign in
        </button>
        <p class="mt-2 text-center text-neutral-800 dark:text-neutral-200">
          Forgot Password?
          <br />{" "}
          <Link
            to="/reset"
            class="text-rose-600 text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            Reset
          </Link>
        </p>
        <p class="mt-2 text-center text-neutral-800 dark:text-neutral-200">
          Not a member?
          <br />{" "}
          <Link
            to="/signUp"
            class="text-rose-600 text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
