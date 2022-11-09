import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AppContext } from "../../context/AppContext";
import Wishlist from "../wishlist/Wishlist";

export default function CreatorView() {
  const { username } = useContext(AppContext);

  return (
    <div className="container container-sm" style={{ maxWidth: "540px" }}>
      <div className="header">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
          class="rounded-circle"
          style={{ width: "150px" }}
          alt="Avatar"
        />
        <div className="mt-2">@{username}</div>
      </div>
      <div className="vstack gap-3">
        <div className="d-flex justify-content-between my-4">
          <button type="button" class="btn btn-primary">
            + Invite
          </button>
          <Link to={"/creator/subscribers"} class="btn">
            9 subscribers
          </Link>
        </div>
        <div className="d-flex justify-content-between my-4">
          <h3>Wishlist</h3>
          <button type="button" class="btn">
            Add items
          </button>
        </div>
        <div className="d-flex justify-content-center my-4">
          <Wishlist />
        </div>
      </div>
    </div>
  );
}
