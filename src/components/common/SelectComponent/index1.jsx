/* eslint-disable react/prop-types */
import { useState } from "react";
import CreatableSelect from "react-select/creatable";
const SelectComponent = ({ listOptions = [] }) => {
  const createOption = (label) => ({
    label,
    value: label.toLowerCase().replace(/\W/g, ""),
  });
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState(() => {
    const defaultOptions = [];
    listOptions.map((item) => {
      defaultOptions.push(createOption(item));
    });
    return defaultOptions;
  });
  const [value, setValue] = useState(null);

  const handleCreate = (inputValue) => {
    setIsLoading(true);
    setTimeout(() => {
      const newOption = createOption(inputValue);
      setIsLoading(false);
      setOptions((prev) => [...prev, newOption]);
      setValue(newOption);
    }, 1000);
  };
  return (
    <>
      <CreatableSelect
        isClearable
        isDisabled={isLoading}
        isLoading={isLoading}
        onChange={(newValue) => setValue(newValue)}
        onCreateOption={handleCreate}
        options={options}
        value={value}
        isOptionDisabled={(option) => option.isDisabled}
        className="max-w-xs py-3 px-4 block w-full border-gray-200 rounded-lg text-2xl focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
      />
    </>
  );
};

export default SelectComponent;
