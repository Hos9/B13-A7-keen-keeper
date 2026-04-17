import React from "react";
import { Link } from "react-router";

const FriendCard = ({ friend }) => {
  return (
    <div>
      <Link to={`/friendDetails/${friend.id}`}>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-full size-40"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl">{friend.name}</h2>
            <p>{friend.days_since_contact} days ago</p>
            <div className="grid grid-cols-2 grid-w gap-2">
              {friend.tags.map((tag, ind) => {
                return (
                  <div key={ind} className="badge badge-outline">
                    {tag}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FriendCard;
