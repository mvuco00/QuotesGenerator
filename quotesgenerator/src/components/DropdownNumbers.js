import React from "react";
import { useDispatch } from "react-redux";
import { getRandomQuotes, setNumber } from "../store/actions/index";

const DropdownNumbers = () => {
  const dispatch = useDispatch();

  const quotesHandler = (num) => {
    dispatch(setNumber(num));
    dispatch(getRandomQuotes(num));
  };

  return (
    <div className="dropdown">
      <button className="dropbtn">Number</button>
      <div className="dropdown-content">
        <div onClick={() => quotesHandler(1)}>1</div>
        <div onClick={() => quotesHandler(2)}>2</div>
        <div onClick={() => quotesHandler(3)}>3</div>
      </div>
    </div>
  );
};

export default DropdownNumbers;
