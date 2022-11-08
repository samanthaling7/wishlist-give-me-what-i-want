import React, { useState } from "react";
import Wishlist from "../wishlist/Wishlist";

export default function SubscriberView() {
  const [subscribe, setSubscribe] = useState(false);

  return (
    <div>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Set up reminder
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body" style={{ textAlign: "left" }}>
              <h6 class="modal-title" id="exampleModalLabel">
                Which occassions would you like us to remind you of?
              </h6>
              <div class="form-check" style={{ paddingTop: "30px" }}>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  Birthday
                </label>
              </div>
              <div class="form-check" style={{ paddingBottom: "30px" }}>
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="defaultCheck1"
                />
                <label class="form-check-label" for="defaultCheck1">
                  Wedding anniversary
                </label>
              </div>
            </div>

            <div class="modal-footer">
              <button type="button" class="btn btn-dark" data-dismiss="modal">
                Send Reminder
              </button>
            </div>
          </div>
        </div>
      </div>

      <div>SamanthaL78</div>
      {!subscribe && (
        <button
          onClick={() => setSubscribe(true)}
          className="btn btn-outline-dark"
          data-toggle="modal"
          data-target="#exampleModal"
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
