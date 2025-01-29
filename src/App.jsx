import React, { useReducer, useState } from "react";
import SidebarButton from "./components/smallComponents/sidebarButton";
import Main from "./components/ui/Main";
import Sidebar from "./components/ui/Sidebar";
const App = () => {
  const [sidebar, setSideBar] = useState(false);
  function sideBarHandle() {
    setSideBar((previous) => !previous);
  }

  const [activeSecond, setActiveSecond] = useState({
    'language':0,
    'clock':0,
    'paragraph':0
  });
  
  return (
    <div className="bg-[url(./typingImg.jpg)] h-screen bg-no-repeat bg-cover relative flex items-center">
      <div className="absolute top-20">
        <SidebarButton onclick={sideBarHandle} />
        {sidebar && <Sidebar isVisible={sidebar} activeSecond={activeSecond} setActiveSecond={setActiveSecond} />}
      </div>
      <Main />
    </div>
  );
};

export default App;
