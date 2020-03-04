import React from "react";

export default function RoomList(props) {
  return (
    <div>
      <button
        style={{
          backgroundColor: props.color,
          width: "200px",
          borderRadius: "10px",
          fontSize: "20px",
          fontWeight: "bold",
          border: "none",
          marginBottom: "5px"
        }}
      >
        {props.name}
      </button>
    </div>
  );
}
