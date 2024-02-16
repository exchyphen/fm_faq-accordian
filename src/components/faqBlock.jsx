import "./faqBlock.css";
import ShowIcon from "../assets/images/icon-plus.svg";
import HideIcon from "../assets/images/icon-minus.svg";

const FAQBlock = (props) => {
  return (
    <button className="faq-block" onClick={props.onClick}>
      {props.active ? (
        <div className="question-and-answer-container">
          <div className="question-container">
            <div className="question-text">{props.question}</div>
            <img className="hide-icon" src={HideIcon} alt="hide icon"></img>
          </div>
          <div className="answer-text">{props.answer}</div>
        </div>
      ) : (
        <div className="question-container">
          <div className="question-text">{props.question}</div>
          <img className="show-icon" src={ShowIcon} alt="show icon"></img>
        </div>
      )}
    </button>
  );
};

export default FAQBlock;
