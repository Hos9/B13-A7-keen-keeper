import React from "react";

const FriendCard = ({ friend }) => {
  return (
    <div>
      <div>
        <div className="card bg-base-100 w-96 shadow-sm">
          <figure className="px-10 pt-10">
            <img
              src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
              alt="Shoes"
              className="rounded-full size-40"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title text-xl">name</h2>
            <p>days_since_contact</p>
            <div className="grid grid-cols-2 grid-w gap-2">
              <p>tags-1</p>
              <p>tags-2</p>
              <p>tags-2</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendCard;
