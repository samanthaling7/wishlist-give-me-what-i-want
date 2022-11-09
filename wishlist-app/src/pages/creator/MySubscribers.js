import React, { useContext } from "react";
import { AppContext } from "../../context/AppContext";

const subscribers = [
  {
    username: "Milly",
    email: "justinliu@notonthehighstreet.com",
  },
  {
    username: "James",
    email: "justinliu@notonthehighstreet.com",
  },
];

export default function MySubscribers() {
  const { username } = useContext(AppContext);

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
  };

  return (
    <div>
      <button className="btn">Remind all</button>
      <ul className="m-0 p-0">
        {subscribers.map((sub) => (
          <li className="flex" key={sub.username}>
            <div>{sub.username}</div>
            <button className="btn" onClick={() => submitHandler(sub)}>
              Remind
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
