import React from "react";

const Button = ({ children, isActive, onclick }) => {
  return (
    <div
      onClick={onclick}
      className={` rounded p-2 text-xl cursor-pointer hover:bg-blue-100 ${
        isActive ? "bg-white text-blue-700" : "bg-blue-700 text-white"
      }`}
    >
      {children}
    </div>
  );
};

export default Button;
