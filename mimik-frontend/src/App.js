import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import AddEvent from "./components/AddEvent";
import EventDetails from "./components/EventDetails";
import EventsHome from "./components/EventsHome";
import ResetPassword from "./components/reset";
import UpdateEvent from "./components/updateEvent";
import EventsList from "./components/EventsList";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import AuthProvider from "./providers/Auth.provider";
const SecureRoute = (Component) => {
  return (
    <AuthProvider required={true}>
      <Navbar />
      <Component />
    </AuthProvider>
  );
};

const BaseRoute = (Component) => {
  return (
    <AuthProvider required={false}>
      <Navbar />
      <Component />
    </AuthProvider>
  );
};
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={BaseRoute(Home)}></Route>
        <Route path="/signIn" element={BaseRoute(SignIn)}></Route>
        <Route path="/signUp" element={BaseRoute(SignUp)}></Route>
        <Route path="/addEvent" element={SecureRoute(AddEvent)}></Route>
        <Route
          path="/EventDetails/:id"
          element={SecureRoute(EventDetails)}
        ></Route>
        <Route path="/events" element={SecureRoute(EventsList)}></Route>
        <Route path="/EventsHome" element={SecureRoute(EventsHome)}></Route>
        <Route path="/reset" element={BaseRoute(ResetPassword)}></Route>
        <Route
          path="/updateEvent/:id"
          element={SecureRoute(UpdateEvent)}
        ></Route>
        <Route path="/EventsList" element={SecureRoute(EventsList)}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;