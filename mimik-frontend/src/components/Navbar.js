import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "./Home";
import SignIn from "./signIn";
import SignUp from "./signUp";
import AddEvent from "./addEvent";
import EventDetails from "./EventDetails";
import EventsHome from "./EventsHome";
import ResetPassword from "./reset";
import UpdateEvent from "./updateEvent";
import { EventsList } from "./EventsList";

function Navbar() {
  return (
    <div>
      <nav className="flex items-center justify-between bg-white h-20 text-gray-600 w-full px-60">
        <div>
          <img src="/assets/logonobg.png" alt="logo" className="h-40" />
        </div>
        <div>
          <ul className="flex gap-6 items-center">
            <li>
              {" "}
              <Link to="/">
                <i className="fa-sharp fa-solid fa-house mr-1"></i>Home
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/events">
                <i className="fa-regular fa-calendar-days mr-1"></i>Events
              </Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/signIn">
                <i className="fa-solid fa-right-to-bracket mr-1"></i>Login
              </Link>{" "}
            </li>
            <li className="bg-rose-600 p-2 text-white rounded-lg hover:opacity-80">
              {" "}
              <Link to="/signUp">
                Signup<i className="fa-solid fa-arrow-right ml-1"></i>
              </Link>{" "}
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/signIn" element={<SignIn />}></Route>
        <Route path="/signUp" element={<SignUp />}></Route>
        <Route path="/addEvent" element={<AddEvent />}></Route>
        <Route path="/EventDetails/:id" element={<EventDetails />}></Route>
        <Route path="/events" element={<EventsList />}></Route>
        <Route path="/EventsHome" element={<EventsHome />}></Route>
        <Route path="/reset" element={<ResetPassword />}></Route>
        <Route path="/updateEvent" element={<UpdateEvent />}></Route>
      </Routes>
    </div>
  );
}
export default Navbar;
