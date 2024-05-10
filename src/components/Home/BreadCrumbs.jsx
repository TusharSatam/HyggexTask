import React from "react";
import { home, rightArrow } from "../../assets";

const BreadCrumbs = () => {
  const breadcrumbs = [
    { label: "Home", link: "/" },
    { label: "Flashcard", link: "/" },
    { label: "Mathematics", link: "/" },
    { label: "Relation and Function" },
  ];
  return (
    <div className="flex gap-1 justify-start items-center text-[18px] font-medium text-gray-500 py-[2rem] flex-wrap">
      {breadcrumbs?.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && (
            <img
              src={rightArrow}
              alt="right arrow"
              className="h-[18px] w-[18px]"
            />
          )}
          {item.link ? (
            <a href={item.link} className="breadcrumb-link">
              {item.label}
            </a>
          ) : (
            <span className="!text-[#06286e]">{item.label}</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default BreadCrumbs;
