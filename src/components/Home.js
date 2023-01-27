import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import AuthConsumer from "../hooks/auth";

const Home = () => {
  const [authed]= AuthConsumer();
  console.log(authed);
  return (
    <main>
      <div className="flex justify-center bg-gray-100">
        <p className=" bg-yellow-400 text-lg font-semibold p-2 my-1 rounded-xl">
          Blog App
        </p>
      </div>
      <Navbar />
      <div className="flex justify-center text-center py-2">
        <Outlet></Outlet>
      </div>
    </main>
  );
};

export default Home;
