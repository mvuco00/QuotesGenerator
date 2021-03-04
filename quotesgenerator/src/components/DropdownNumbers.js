import React from "react";
import { useDispatch } from "react-redux";
import { getRandomQuotes } from "../store/actions/index";

const DropdownNumbers = () => {
  const dispatch = useDispatch();

  return (
    <div className="dropdown">
      <button className="dropbtn">Number</button>
      <div className="dropdown-content">
        <div onClick={() => dispatch(getRandomQuotes(1))}>1</div>
        <div onClick={() => dispatch(getRandomQuotes(2))}>2</div>
        <div onClick={() => dispatch(getRandomQuotes(3))}>3</div>
      </div>
    </div>
  );
};

export default DropdownNumbers;
