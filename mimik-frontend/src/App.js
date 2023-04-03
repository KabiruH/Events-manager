import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import AddEvent from "./components/addEvent";
import EventDetails from "./components/EventDetails";
import EventsHome from "./components/EventsHome";
import ResetPassword from "./components/reset";
import UpdateEvent from "./components/updateEvent";
import EventsList from "./components/EventsList";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
// import AddEvent from "./components/addEvent";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
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
        <Route path="/EventsList" element={<EventsList />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
