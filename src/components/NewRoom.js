import React, { useState } from "react";

export default function NewRoom(props) {
  const [room, setRoom] = useState({ type: "", name: "", color: "" });
  const addNewRoom = () => {
    props.addRoom(room.name, room.color, room.type);
  };
  return (
    <div>
      <select
        onChange={e => {
          setRoom({ ...room, type: e.target.value });
        }}
      >
        <option value="Select room type">Select room type</option>
        <option value="Bedroom">Bedroom</option>
        <option value="Bathroom">Bathroom</option>
        <option value="Kitchen">Kitchen</option>
      </select>
      <input
        onChange={e => {
          setRoom({ ...room, name: e.target.value });
        }}
        type="text"
      ></input>
      <input
        onChange={e => {
          setRoom({ ...room, color: e.target.value });
        }}
        type="text"
      ></input>
      <button onClick={addNewRoom}>Add Room</button>
    </div>
  );
}
