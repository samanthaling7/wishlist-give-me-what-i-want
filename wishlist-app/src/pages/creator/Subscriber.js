import React from "react";

export default function Subscriber({ username, name, img }) {
  return (
    <div className="d-flex border border-secondary rounded my-2 overflow-hidden bg-white boxShadow">
      <img
        src={img}
        style={{
          width: "130px",
          height: "70px",
          objectFit: "cover",
          boxSizing: "border-box",
        }}
        alt={name}
      />
      <div className="text-left p-2 d-flex flex-column justify-content-center">
        <p style={{ fontSize: "20px" }} className="m-0">
          <strong>@{username}</strong>
        </p>
        <p className="m-0">{name}</p>
      </div>
    </div>
  );
}
