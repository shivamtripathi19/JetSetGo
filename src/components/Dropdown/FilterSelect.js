import React from "react";
import { Select } from "antd";
const FilterSelect = ({ mode, placeholder, options, value, onChange }) => {
  return (
    <Select
      style={{
        width: 150,
      }}
      mode={mode}
      showSearch
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      options={options}
    />
  );
};

export default FilterSelect;
