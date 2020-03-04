import React, { useState, useEffect } from "react";
import "./App.css";
import Rooms from "./components/Rooms";
import NewRoom from "./components/NewRoom";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [rooms, setRooms] = useState([]);
  useEffect(()=>{
    const storedRooms=localStorage.getItem("myRooms");
    if(storedRooms){
      setRooms(JSON.parse(storedRooms))
    }
  },[])
  useEffect(()=>{
    localStorage.setItem("myRooms",JSON.stringify(rooms))
  },[rooms])
  const addRoom = (name, color, type) => {
    setRooms(oldRooms => {
      let newRooms = { ...oldRooms };
      let newRoom = { type: type, name: name, color: color };
      newRooms = [...rooms, newRoom];
      return newRooms;
    });
  };
  return (
    <Router>
      <div className="App">
        <h1>Smart House</h1>
        <Switch>
          <Route
            exact
            path="/"
            render={props => <Rooms {...props} rooms={rooms} />}
          />
          <Route
            exact
            path="/NewRoom"
            render={props => <NewRoom {...props} addRoom={addRoom} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
