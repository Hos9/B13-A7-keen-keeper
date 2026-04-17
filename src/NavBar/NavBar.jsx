import React from "react";
import { IoHomeOutline, IoTimeOutline } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";
import { NavLink, Link } from "react-router";

const NavBar = () => {
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "btn btn-outline btn-success" : "btn btn-ghost"
          }
        >
          <IoHomeOutline />
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/timeline"
          className={({ isActive }) =>
            isActive ? "btn btn-outline btn-success" : "btn btn-ghost"
          }
        >
          <IoTimeOutline />
          Timeline
        </NavLink>
      </li>

      <li>
        <NavLink
          to="/stats"
          className={({ isActive }) =>
            isActive ? "btn btn-outline btn-success" : "btn btn-ghost"
          }
        >
          <TfiStatsUp />
          Stats
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="w-11/12 mx-auto navbar bg-base-100 shadow-sm">
      <div className="flex-1">
        <Link to="/" className="text-xl font-bold">
          Keen<span>Keeper</span>
        </Link>
      </div>

      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
    </div>
  );
};

export default NavBar;
