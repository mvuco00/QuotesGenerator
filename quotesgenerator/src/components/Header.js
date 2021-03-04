import React from "react";
import DropdownNumbers from "./DropdownNumbers";

const Header = ({ setNumber }) => {
  return (
    <div className="header">
      <div className="dropdowns">
        <DropdownNumbers setNumber={setNumber} />
      </div>
    </div>
  );
};

export default Header;
