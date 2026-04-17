import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";

const FriendStats = () => {
  // const { friendId } = useParams();

  // const friends = useLoaderData();

  // const expectedFriend = friends.find(
  //   (friend) => friend.id === Number(friendId),
  // );

  // const {
  //   id,
  //   name,
  //   picture,
  //   email,
  //   days_since_contact,
  //   status,
  //   tags,
  //   bio,
  //   goal,
  //   next_due_date,
  // } = expectedFriend;

  return (
    <div className="w-11/12 container mx-auto text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-10">
      <div className="p-8 shadow-md">
        <h1 className="font-semibold text-3xl color-[#244D3F] mb-2">
          {id.length}
        </h1>
        <p className="color-[#64748B]">Total Friends</p>
      </div>
      <div className="p-8 shadow-md">
        <h1 className="font-semibold text-3xl color-[#244D3F] mb-2">3</h1>
        <p className="color-[#64748B]">On Track</p>
      </div>
      <div className="p-8 shadow-md">
        <h1 className="font-semibold text-3xl color-[#244D3F] mb-2">6</h1>
        <p className="color-[#64748B]">Need Attention</p>
      </div>
      <div className="p-8 shadow-md">
        <h1 className="font-semibold text-3xl color-[#244D3F] mb-2">12</h1>
        <p className="color-[#64748B]">Interactions This Month</p>
      </div>
    </div>
  );
};

export default FriendStats;
