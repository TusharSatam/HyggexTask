import React, { useState } from "react";
import { downArrow } from "../../assets";

const FAQ = () => {
  const [expanded, setExpanded] = useState([]);

  const toggleExpanded = (index) => {
    setExpanded((prevExpanded) =>
      prevExpanded.includes(index)
        ? prevExpanded.filter((item) => item !== index)
        : [...prevExpanded, index]
    );
  };

  const faqData = [
    {
      question: "Can education flashcards be used for all age groups?",
      answer:
        "Yes, education flashcards can be tailored to suit different age groups and learning levels. They are versatile learning tools that can be adapted to meet the needs of learners of all ages.",
    },
    {
      question: "How do education flashcards work?",
      answer:
        "Education flashcards work by presenting information in a concise and visually engaging format. Learners can use flashcards to review and reinforce key concepts, terms, and facts through repetition and active recall.",
    },
    {
      question: "Can education flashcards be used for test preparation?",
      answer:
        "Yes, education flashcards are effective tools for test preparation. They allow learners to review and memorize essential information quickly and efficiently, making them ideal for studying for exams and quizzes.",
    },
  ];

  return (
    <section id="faq" className="flex flex-col justify-start items-start  gap-[1.5rem] md:gap-[2rem]">
      <h1 className="linearText font-bold  text-3xl md:text-5xl">FAQ</h1>
      {faqData.map((item, index) => (
        <div
          key={index}
          className="faq-item flex justify-start items-start flex-col text-lg w-full lg:w-[70%]"
        >
          <div
            className="flex border border-[#06286e] w-full  justify-between rounded-lg  py-3 px-3 md:px-4 text-left cursor-pointer"
            onClick={() => toggleExpanded(index)}
          >
            <h2 className="cursor-pointer text-[1rem] md:text-lg font-semibold   text-left ">
              {item.question}
            </h2>
            {expanded.includes(index) ? (
              <img
                src={downArrow}
                alt=""
                className="h-[18px] w-[18px] md:h-[24px] md:w-[24px] inverted"
              />
            ) : (
              <img src={downArrow} alt="" className="h-[24px] w-[24px]" />
            )}
          </div>
          {expanded.includes(index) && (
            <p className=" text-[1rem] md:text-lg text-left px-2">{item.answer}</p>
          )}
        </div>
      ))}
    </section>
  );
};

export default FAQ;
