import React from "react";
import { Link } from "react-router-dom";
import RoomList from "./RoomList";

export default function Rooms(props) {
  return (
    <div>
      {props.rooms.map(room => {
        return (
          <RoomList name={room.name} color={room.color} type={room.type} />
        );
      })}
      <button><Link to="/NewRoom">+</Link></button>
    </div>
  );
}
