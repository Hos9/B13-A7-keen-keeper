import React, { use } from "react";
import FriendCard from "../Components/UI/FriendCard";

const friendsPromise = fetch("/data.json").then((res) => res.json());

const AllFriends = () => {
  const friends = use(friendsPromise);

  return (
    <div className="container mx-auto w-11/12">
      <div>
        <h1 className="text-3xl font-bold mb-4">Your Friends</h1>
      </div>
      <div id="card" className="grid grid-cols-4 gap-10">
        {friends.map((friend) => {
          return <FriendCard key={friend.id} friend={friend} />;
        })}
      </div>
    </div>
  );
};

export default AllFriends;
