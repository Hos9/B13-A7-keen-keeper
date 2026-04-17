import React from "react";
import { useLoaderData, useParams } from "react-router";

const FriendDetails = () => {
  const { friendId } = useParams();

  const friends = useLoaderData();

  const expectedFriend = friends.find(
    (friend) => friend.id === Number(friendId),
  );

  const {
    id,
    name,
    picture,
    email,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
  } = expectedFriend;

  return (
    <div>
      <h1>Friend Details</h1>
    </div>
  );
};

export default FriendDetails;
