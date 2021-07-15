import { useState, useEffect } from "react";

const Expandable = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen((currOpen) => !currOpen);
  };

  return (
    <div>
      <button onClick={toggleOpen}>
        {isOpen ? "Hide Comments" : "Show Comments"}
      </button>
      {isOpen && children}
    </div>
  );
};

export default Expandable;
