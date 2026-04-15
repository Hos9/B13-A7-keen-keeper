import React from "react";
import { useLoaderData, useParams } from "react-router";

const FriendDetails = () => {
  const { friendId } = useParams();

  const friends = useLoaderData();


  return (
    <div className="container mx-auto">
      <h1>Friend Details</h1>
    </div>
  );
};

export default FriendDetails;
