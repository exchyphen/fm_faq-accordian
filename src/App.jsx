import { useState } from "react";
import FAQBlock from "./components/faqBlock";
import "./App.css";
import FAQImg from "./assets/images/icon-star.svg";

function App() {
  const [activeBlocks, setActiveBlocks] = useState(() => {
    const arr = Array(4).fill(false);
    arr[0] = true;
    return arr;
  });

  const questionsArr = [
    "What is Frontend Mentor, and how will it help me?",
    "Is Frontend Mentor free?",
    "Can I use Frontend Mentor projects in my portfolio?",
    "How can I get help if I'm stuck on a challenge?",
  ];

  const ansArr = [
    "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
    "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
    "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
    "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  ];

  const handleClick = (index) => {
    // toggle active on index
    const currActiveBlocks = activeBlocks.map((val, i) =>
      i === index ? !val : val
    );
    setActiveBlocks(currActiveBlocks);
  };

  const createFAQBlocks = () => {
    const arr = [];

    for (let i = 0; i < questionsArr.length; i++) {
      arr.push(
        <FAQBlock
          key={`faq${i}`}
          question={questionsArr[i]}
          answer={ansArr[i]}
          active={activeBlocks[i]}
          onClick={() => handleClick(i)}
        ></FAQBlock>
      );
      arr.push(<div key={`line${i}`} className="line"></div>);
    }

    // remove last line
    arr.pop();

    return arr;
  };

  return (
    <>
      <div className="main-container">
        <div className="header-container">
          <img className="header-icon" src={FAQImg} alt="header icon"></img>
          <h1>FAQs</h1>
        </div>
        <div className="faq-container">{createFAQBlocks()}</div>
      </div>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://github.com/exchyphen" target="_blank">
          exc
        </a>
        .
      </div>
    </>
  );
}

export default App;
