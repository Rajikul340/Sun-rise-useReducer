import React from "react";
import { Link } from "react-router-dom";



const NavBar = () => {
  return (
    <div className="navbar bg-blue-300 rounded-md">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Sun Rise</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li>
           <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="cart">cart</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
