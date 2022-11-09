import React, { useContext, useState } from "react";
import { AppContext } from "../../context/AppContext";
import Subscriber from "./Subscriber";

const subscribers = [
  {
    username: "Daisy",
    name: "Daisy Duck",
    img: "https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png",
  },
  {
    username: "scroog",
    name: "Scroo Mcduck",
    img: "https://www.shareicon.net/download/2016/05/26/771190_people_512x512.png",
  },
  {
    username: "Minnie",
    name: "Minnie Mouse",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGbyfScTHXApv0dMs539n-YAH3BtzaQ1yLw&usqp=CAU",
  },
  {
    username: "Donald",
    name: "Donald Duck",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7gXPWxo_fQPzvP2TNGFtHzqQiChF6VklO68Fydsig_A69sVnizAMg_bxzCLvFEDMpwI8&usqp=CAU",
  },
];

export default function MySubscribers() {
  const { username } = useContext(AppContext);
  const [sent, setSent] = useState(false);

  const submitHandler = async (subscriber) => {
    const data = {
      subscriber,
      username,
    };
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
    await fetch("http://localhost:8080/spam-my-friends", requestOptions);
    setSent(true);

    setTimeout(() => setSent(false), 2000);
  };

  return (
    <div>
      <h1>Subscribers</h1>
      <div className="d-flex my-4">
        <button
          className="btn border border-secondary rounded bg-white"
          style={{ width: "150px" }}
        >
          Remind all
        </button>
      </div>
      <ul
        className="m-0 p-0 d-flex flex-column container justify-content-between"
        style={{ listStyleType: "none" }}
      >
        {subscribers.map((sub) => (
          <li
            className="d-flex flex-row row align-items-center"
            key={sub.username}
            style={{ width: "100%" }}
          >
            <div className="col-9">
              <Subscriber {...sub} />
            </div>
            <button
              className="btn btn-light col-3 border border-secondary rounded bg-white"
              style={{ width: "150px" }}
              onClick={() => submitHandler(sub)}
            >
              Remind
            </button>
          </li>
        ))}
      </ul>
      {sent && (
        <div class="alert alert-info mt-2" role="alert">
          Your reminder has been sent
        </div>
      )}
    </div>
  );
}
