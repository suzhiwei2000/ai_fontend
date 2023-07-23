import React, { useState } from "react";
import "./Accordion.css";
import { AiOutlinePlus,AiOutlineMinus } from "react-icons/ai";

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    setIsVisible(!isVisible);
  };

  return (
    <div className="accordion">
      <div className={`accordion-item ${isOpen ? "open" : ""}`}>
        <div className="accordion-header flex items-center" onClick={toggleAccordion}>
            {!isVisible && <AiOutlinePlus fontSize={18}  className="mr-2" />}
            {isVisible && <AiOutlineMinus fontSize={18}  className="mr-2" />}  
          {title}
        </div>
        {isOpen && <div className="accordion-content">{content}</div>}
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
