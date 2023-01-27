import React from "react";
import AuthConsumer from "../hooks/auth";
import { useNavigate } from "react-router-dom";

const Button = ({ text, type, url }) => {
  const [, dispatch] = AuthConsumer();
  const navigate = useNavigate();
  return (
    <div className="py-2">
      <button
        type="button"
        className="inline-block px-6 py-2.5 bg-blue-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-500 hover:shadow-lg focus:bg-blue-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-600 active:shadow-lg transition duration-150 ease-in-out"
        onClick={() => {
          dispatch({ type: type });
          navigate(url, { replace: true });
        }}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
