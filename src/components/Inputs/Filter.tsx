import React from "react";
import "./index.css";

interface FilterProps {
  onChange: (query: string) => void;
}

const Filter = ({ onChange }: FilterProps) => {
  return (
    <input
      placeholder="Поиск"
      className="search"
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

export default Filter;
