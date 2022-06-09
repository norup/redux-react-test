import React from "react";
import "./index.css";

interface SortProps {
  onChange: (sortType: string) => void;
}

const Sort = () => {
  return (
    <div className="navbar">
      <div className="dropdown">
        <button className="dropbtn">Сортировка</button>
        <div className="dropdown-content">
          <span>По названию</span>
          <span>По дате</span>
        </div>
      </div>
    </div>
  );
};

export default Sort;
