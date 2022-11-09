import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../context/AppContext";
import Wishlist from "../wishlist/Wishlist";

export default function CreatorView() {
  const { username } = useContext(AppContext);

  return (
    <div className="container container-sm">
      <div className="header">
        <img
          src="https://cdn5.vectorstock.com/i/1000x1000/73/04/female-avatar-profile-icon-round-woman-face-vector-18307304.jpg"
          className="rounded-circle border border-secondary"
          style={{
            width: "90px",
            height: "90px",
            objectFit: "cover",
            margin: "30px",
          }}
          alt="Avatar"
        />
        <div style={{ marginBottom: "20px", fontWeight: "bold" }}>
          @{username}
        </div>
      </div>
      <div className="d-flex justify-content-between py-4">
        <button type="button" className="btn btn-light border border-secondary">
          + Invite
        </button>
        <Link to={"/creator/subscribers"} className="text-dark">
          4 subscribers
        </Link>
      </div>
      <div className="d-flex justify-content-between py-4">
        <h3>Wishlist</h3>
        <button type="button" className="btn btn-dark">
          Add items
        </button>
      </div>
      <Wishlist />
    </div>
  );
}
