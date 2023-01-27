import React from "react";
import { NavLink } from "react-router-dom";
import AuthConsumer from "../hooks/auth";
import Routes from "../routes/Routes";

const Navbar = () => {
  const [{ auth }] = AuthConsumer();
  const links = Routes[0].children;
  return (
    <div className="flex justify-center py-2 bg-indigo-500 ">
      <ul className="flex flex-row gap-4 items-center">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-orange-400 text-xl" : "text-gray-50 text-xl"
          }
        >
          Home
        </NavLink>
        {links.map((link, index) =>
          link.RouteName && link.protected === auth ? (
            <NavLink
              to={link.path}
              key={index}
              className={({ isActive }) =>
                isActive ? "text-orange-400 text-xl" : "text-gray-50 text-xl"
              }
            >
              {link.RouteName}
            </NavLink>
          ) : (
            false
          )
        )}
      </ul>
    </div>
  );
};

export default Navbar;
