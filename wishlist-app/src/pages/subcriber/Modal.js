import React from "react";

export default function Modal() {
  return (
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
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
              <label className="form-check-label" htmlFor="defaultCheck1">
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
              <label className="form-check-label" htmlFor="defaultCheck1">
                Wedding anniversary
              </label>
            </div>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-dark" data-dismiss="modal">
              Send Reminder
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
