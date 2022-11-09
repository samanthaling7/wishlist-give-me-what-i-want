import React, { useState } from "react";
import Wishlist from "../wishlist/Wishlist";

export default function SubscriberView() {
  const [subscribe, setSubscribe] = useState(false);

  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Set up reminder
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" style={{ textAlign: "left" }}>
              <h6 className="modal-title" id="exampleModalLabel">
                Which occassions would you like us to remind you of?
              </h6>
              <div className="form-check" style={{ paddingTop: "30px" }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label className="form-check-label" for="defaultCheck1">
                  Birthday
                </label>
              </div>
              <div className="form-check" style={{ paddingBottom: "30px" }}>
                <input
                  className="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label className="form-check-label" for="defaultCheck1">
                  Wedding anniversary
                </label>
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-dark"
                data-dismiss="modal"
              >
                Send Reminder
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src="https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png"
          width="200px"
          height="200px"
          alt="sam"
          className="img-fluid rounded-start cover"
          style={{ margin: "30px" }}
        />
        <div style={{ marginBottom: "20px", fontWeight: "bold" }}>@Sam</div>
      </div>
      {!subscribe && (
        <button
          onClick={() => setSubscribe(true)}
          className="btn btn-outline-dark"
          data-toggle="modal"
          data-target="#exampleModal"
          style={{ marginBottom: "30px" }}
        >
          Subscribe
        </button>
      )}
      {subscribe && (
        <button onClick={() => setSubscribe(false)} className="btn btn-dark">
          Unsubscribe
        </button>
      )}
      <Wishlist role="subscriber" />
    </div>
  );
}
