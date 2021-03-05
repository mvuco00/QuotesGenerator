import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTags, setTag, filterByTag } from "../store/actions";
import DropdownNumbers from "./DropdownNumbers";

const Header = ({ setNumber }) => {
  const dispatch = useDispatch();
  const tags = useSelector((state) => state.tags);
  const number = useSelector((state) => state.numberOfQuotes);

  useEffect(() => {
    dispatch(getTags());
  }, [dispatch]);

  const handleFilter = (tag2) => {
    dispatch(setTag(tag2));
    dispatch(filterByTag(number, tag2));
  };
  return (
    <div className="header">
      <div className="dropdowns">
        <DropdownNumbers setNumber={setNumber} />
        <div className="dropdown">
          <button className="dropbtn">Types</button>
          <div className="dropdown-content">
            {tags.map((tag2) => (
              <div key={tag2} onClick={() => handleFilter(tag2)}>
                {tag2}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
