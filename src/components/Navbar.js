import React from "react";
import { NavLink } from "react-router-dom";

const links = [
  { name: "Home", path: "/" },
  { name: "Login", path: "/login" },
  { name: "Blogs", path: "/blogs" },
  { name: "Settings", path: "/settings" },
];

const Navbar = () => {
  return (
    <div className="flex justify-center py-2 bg-indigo-500 ">
      <ul className="flex flex-row gap-4 items-center">
        {links.map((link, index) => {
          return (
            <NavLink
              to={link.path}
              key={index}
              className={({ isActive }) => (isActive ? "text-orange-400 text-xl" : "text-gray-50 text-xl")}
            >
              {link.name}
            </NavLink>
          );
        })}
      </ul>
    </div>
  );
};

export default Navbar;
