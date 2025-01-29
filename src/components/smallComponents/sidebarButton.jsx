import React from "react";

const SidebarButton = ({ onclick }) => {
  return (
    <div
      className="px-4 py-3 bg-blue-400 inline-block rounded-sm cursor-pointer hover:bg-white group transition duration-400 "
      onClick={onclick}
    >
      <i className="fa-solid fa-bars text-white text-2xl group-hover:text-blue-400 transition duration-400"></i>
    </div>
  );
};

export default SidebarButton;
