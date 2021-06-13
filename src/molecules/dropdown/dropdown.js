import React from "react";

export default function Dropdown(props) {
  const { optionsList, handleChange } = props;

  return (
    <select className="form-control custom-select" onChange={(e) => handleChange(e.target.value)}>
      <option value="" disabled selected>
        {"All Classes"}
      </option>
      <hr />
      {optionsList.map((option, i) => (
        <option
          value={option.label}
          key={i}
          data-secondary-text={option.stationLongName}
        >
          {option.label}
        </option>
      ))}
    </select>
  );
}
