import React, { useState, useRef, useEffect } from "react";
import {
  backArrow,
  createIcon,
  expand,
  forwardArrow,
  light,
  logo1,
  publishedBy,
  refresh,
  sound,
} from "../../assets";

const TabItem = ({ label, active, onClick }) => {
  return (
    <div
      className={`${
        active ? "activeTab" : "border border-transparent cursor-pointer"
      } py-1 px-2`}
      onClick={onClick}
    >
      {label}
    </div>
  );
};

const Flashcard = () => {
  const [activeTab, setActiveTab] = useState("study");
  const underlineRef = useRef(null);
  const [counter, setCounter] = useState(1);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const tabData = [
    { label: "Study", value: "study" },
    { label: "Quiz", value: "quiz" },
    { label: "Test", value: "test" },
    { label: "Game", value: "game" },
    { label: "Others", value: "others" },
  ];

  const handleForwardClick = () => {
    if (counter < 10) {
      setCounter(counter + 1);
    }
  };

  const handleBackClick = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };
  useEffect(() => {
    if (underlineRef.current) {
      const activeElement = document.querySelector(`.${activeTab}`);
      if (activeElement) {
        underlineRef.current.style.width = `${activeElement.offsetWidth}px`;
        underlineRef.current.style.left = `${activeElement.offsetLeft}px`;
      }
    }
  }, [activeTab]);
  return (
    <div className="flex flex-col gap-[2.5rem]">
      <h1 className="linearText font-bold text-2xl md:text-[32px] text-left">
        Relations and Functions ( Mathematics )
      </h1>
      <div className="w-full md:w-[712px] mx-auto flex flex-col gap-[1.5rem]">
        <div className="navtabs flex flex-wrap  gap-[1rem] md:gap-[2rem] font-medium justify-center text-[#696671]">
          {tabData.map((item, index) => (
            <TabItem
              key={index}
              label={item.label}
              active={activeTab === item.value}
              onClick={() => handleTabClick(item.value)}
            />
          ))}
        </div>
        <div className="videoTabLinearColor flex justify-center items-center relative h-[250px] md:h-[393.19px] font-bold  text-xl md:text-[38.26px] rounded-[42.51px] text-white">
          <img
            src={light}
            alt="lightIcon"
            className="h-[34px] w-[34px] absolute left-[5%] top-[6%] cursor-pointer"
          />
          <img
            src={sound}
            alt="lightIcon"
            className="h-[34px] w-[34px] absolute right-[5%] top-[6%] cursor-pointer"
          />
          {activeTab==="study"?"9 + 6 + 7x - 2x - 3":activeTab==="quiz"?"Quiz":activeTab==="test"?"Test":activeTab==="game"?"Game":"Others"}
        </div>
        <div className="options flex justify-between items-center px-[8%]">
          <img
            src={refresh}
            alt="refresh"
            className="h-[20px] w-[20px] md:h-[30px] md:w-[30px] cursor-pointer"
          />
          <div className="flex gap-[.6rem] md:gap-[2rem] items-center text-lg md:text-[24px] font-bold">
            <img
              src={backArrow}
              alt="backArrow"
              className="h-[30px] w-[30px] md:h-[60px] md:w-[60px] cursor-pointer"
              onClick={handleBackClick}
            />
            {counter < 10 ? `0${counter}` : counter}/10
            <img
              src={forwardArrow}
              alt="backArrow"
              className="h-[30px] w-[30px] md:h-[60px] md:w-[60px] cursor-pointer"
              onClick={handleForwardClick}
            />
          </div>
          <img
            src={expand}
            alt="refresh"
            className="h-[20px] w-[20px] md:h-[30px] md:w-[30px] cursor-pointer"
          />
        </div>
      </div>
      <div className="createFlashcard flex justify-between items-center my-[3rem] md:mt-[3rem] md:mb-[6rem]">
        <img src={logo1}  alt="brandlogo" className="h-[70px] md:h-full cursor-pointer"/>
        <div className="flex md:gap-[1rem] linearText text-[1rem] md:text-[28px] font-semibold items-center cursor-pointer">
          <img src={createIcon} alt="createIcon" className="h-[30px] md:h-full"/>
          Create Flashcard
        </div>
      </div>
    </div>
  );
};

export default Flashcard;
