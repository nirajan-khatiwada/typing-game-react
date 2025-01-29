import React from "react";
import { useContext } from "react";
import { dataContext } from "../../store/dataStore";
import data from "../../util/data";
const ChooseButton = ({ children, text,onclick,setActive }) => {
  const storedata=useContext(dataContext)
  return (
    <button
        onClick={()=>{
          
            setActive(onclick.second)
            
            
            storedata.dispatch({type:data[onclick.first][0],param:data[onclick.first][1][onclick.second]})
        }}
      className={`rounded-sm border-4  border-white py-2 cursor-pointer hover:bg-white hover:text-blue-400 ${
        text ? text : undefined
      } ${onclick.isActive?'bg-white text-blue-700':'text-white '}`}
    >
      {children}
    </button>
  );
};

export default ChooseButton;
