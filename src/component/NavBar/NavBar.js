import React from "react";
import { Link } from "react-router-dom";
import { BsFillCartFill } from "react-icons/bs";
import { IoIosListBox } from "react-icons/io";


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
           <Link to="/topreted">Top Reted</Link>
          </li>
          <li>
          <Link to="cart"><BsFillCartFill size="20px"/></Link>
          </li>
          <li>
            <Link to="/"> <IoIosListBox size="20px"/></Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
