import React from "react";
import { AutoComplete, Input } from "antd";
import { inputField } from "./styles";

const InputTextWrapper = ({ label, options, keys, handleInput }) => {
  const optionItems = [
    {
      label: label,
      options:
        options?.map((flightItem) => {
          return {
            value: flightItem,
            label: flightItem,
          };
        }) ?? [],
    },
  ];

  const handleInputSelect = (value) => {
    handleInput(keys, value);
  };

  return (
    <AutoComplete
      options={optionItems}
      size="large"
      className={inputField}
      filterOption={(input, option) =>
        (option?.label?.toLowerCase() ?? "").includes(input?.toLowerCase())
      }
      onSelect={handleInputSelect}
    >
      <Input size="large" placeholder={`Enter the ${label}`} />
    </AutoComplete>
  );
};
export default InputTextWrapper;
