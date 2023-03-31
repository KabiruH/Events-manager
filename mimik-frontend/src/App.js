import React from "react";
import SignIn from "./components/signIn";
import SignUp from "./components/signUp";
import UpdateEvent from "./components/updateEvent";
import AddEvent from "./components/addEvent";
import EventItem from "./components/eventItem";

function App() {
  return (
    <div className="App">
      {/* <SignIn/>
      <SignUp/>
      <UpdateEvent/>
      <AddEvent/> */}
      <EventItem/>
     
    </div>
  );
}

export default App;
