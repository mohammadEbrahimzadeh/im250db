import React, { useEffect, useState } from "react";
import { NavLink, Link } from "react-router-dom";
import logo from "../../../img/logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function NavBar() {
  const [isClose, setisClose] = useState(true);
  function toggleHumber() {
    setisClose(!isClose);
  }
  return (
    <div
      className={` NavBar  col-sm-12 col-12      p-1 m-0 d-flex align-items-sm-center  align-items-start justify-content-sm-evenly  ${
        isClose ? " Close " : "Open"
      }  `}
    >
      <div className="col-1 d-sm-flex  d-none   p-0 m-0   ">
        <Link to={"/"}>
          <img className="  w-100 p-0 m-0  " src={logo} alt="" />
        </Link>
      </div>{" "}
      <div className="col-sm-11 col-12     p-0 m-0  d-flex align-items-center justify-content-center">
        <ul className="d-flex col-12 p-3 p-sm-0    gap-3 gap-sm-0 col-sm-12  flex-sm-row flex-column   p-0 m-0  justify-content-evenly align-items-center     list-unstyled    ">
          <li onClick={toggleHumber}>
            <NavLink
              className={({ isActive }) => (isActive ? "text-warning " : " ")}
              to={"/home"}
            >
              Home
            </NavLink>
          </li>
          <li onClick={toggleHumber}>
            {" "}
            <NavLink
              className={({ isActive }) => (isActive ? "text-warning" : " ")}
              to={"/crime"}
            >
              Crime
            </NavLink>
          </li>
          <li onClick={toggleHumber}>
            <NavLink
              className={({ isActive }) => (isActive ? "text-warning" : " ")}
              to={"/drama"}
            >
              Drama{" "}
            </NavLink>
          </li>
          <li onClick={toggleHumber}>
            <NavLink
              className={({ isActive }) => (isActive ? "text-warning" : " ")}
              to={"/action"}
            >
              Action{" "}
            </NavLink>
          </li>
          <li onClick={toggleHumber}>
            <NavLink
              className={({ isActive }) => (isActive ? "text-warning" : " ")}
              to={"/biography"}
            >
              Biography{" "}
            </NavLink>
          </li>
          <li onClick={toggleHumber}>
            <NavLink
              className={({ isActive }) => (isActive ? "text-warning" : " ")}
              to={"/history"}
            >
              History{" "}
            </NavLink>
          </li>
          <li onClick={toggleHumber}>
            <NavLink
              className={({ isActive }) => (isActive ? "text-warning" : " ")}
              to={"/adventure"}
            >
              Adventure{" "}
            </NavLink>
          </li>
        </ul>
      </div>{" "}
      <div
        className={`${
          isClose
            ? " HumbergerBtn  d-sm-none"
            : " HumbergerBtn  w-100 d-sm-none"
        }`}
      >
        <button className="m-0 text-center" onClick={toggleHumber}>
          {isClose ? (
            <AiOutlineMenu></AiOutlineMenu>
          ) : (
            <AiOutlineClose></AiOutlineClose>
          )}
        </button>
      </div>
    </div>
  );
}
