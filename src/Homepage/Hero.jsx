import React from "react";
import { FaPlus } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="container mx-auto mt-20 mb-10 text-center">
      <h1 className="font-bold text-5xl color-[#244D3F] mb-4">
        Friends to keep close in your life
      </h1>
      <p className="color-[#64748B] mb-8">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the <br /> relationships that matter most.
      </p>
      <button className="btn btn-accent">
        <FaPlus />
        Add a Friend
      </button>
    </div>
  );
};

export default Hero;
