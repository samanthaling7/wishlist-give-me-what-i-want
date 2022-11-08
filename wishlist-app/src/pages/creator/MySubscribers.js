import React from "react";

const subscribers = [
  {
    username: "username1238y3",
  },
  {
    username: "username3jdjskw",
  },
];

export default function MySubscribers() {
  return (
    <div>
      <button className="btn">Remind all</button>
      <ul className="m-0 p-0">
        {subscribers.map((sub) => (
          <li className="flex">
            <div>{sub.username}</div>
            <button className="btn">Spam</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
