import React, { Children, useState } from "react";
import Button from "../smallComponents/button";
import ChooseButton from "../smallComponents/ChooseButton";
import data from "../../util/data";
const Sidebar = ({ isVisible,activeSecond,setActiveSecond }) => {
  const [activeList, setActiveList] = useState(0);

  const activeListHandeler = (data) => {
    setActiveList(data);
  };

  return (
    <div
      className={`mt-10 bg-blue-600 h-[60vh] w-72 rounded-r-2xl flex items-center transform-all duration-700 ${
        !isVisible ? "-translate-x-20" : "translate-x-0 "
      }`}
    >
      <div className="flex flex-col  space-y-6  shadow-xl shadow-blue-900 px-4 py-8">
        {data.map((item, index) => {
          return (
            <Button
              key={item}
              isActive={activeList == index}
              onclick={() => activeListHandeler(index)}
            >
              <i className={`fa-solid fa-${item[0]}`}></i>
            </Button>
          );
        })}
      </div>
      <div className="mx-auto flex flex-col space-y-4 ">
        <span className="text-xl text-white font-bold">
          Choose A {data[activeList][0]}
        </span>

        <div className="grid grid-cols-2 gap-2">
          {data[activeList][1].map((item, index) => {
            return (
              <ChooseButton
                key={index}
                text="text-xl font-semibold"
                setActive={(index) => {
                  setActiveSecond((prev)=>({...prev,[data[activeList][1]]:index}));
                }}
                onclick={{
                  first: activeList,
                  second: index,
                  isActive: activeSecond[data[activeList][1]] === index,
                }}
              >
                {item}
              </ChooseButton>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
