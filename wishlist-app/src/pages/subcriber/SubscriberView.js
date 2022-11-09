import React, { useState } from "react";
import Wishlist from "../wishlist/Wishlist";
import Modal from "./Modal";

export default function SubscriberView() {
  const [subscribe, setSubscribe] = useState(false);

  return (
    <div>
      <Modal />
      <div>
        <img
          src="https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png"
          width="90px"
          height="90px"
          alt="sam"
          className="img-fluid rounded-start cover"
          style={{ margin: "30px" }}
        />
        <div style={{ marginBottom: "20px", fontWeight: "bold" }}>@Sam</div>
      </div>
      <button
        onClick={() => setSubscribe(!subscribe)}
        className={`btn ${subscribe ? "btn-outline-dark" : "btn-dark"}`}
        data-toggle={subscribe ? "modal" : ""}
        data-target="#exampleModal"
        style={{ marginBottom: "30px" }}
      >
        {subscribe ? "Unsubscribe" : "Subscribe"}
      </button>
      <Wishlist role="subscriber" />
    </div>
  );
}
