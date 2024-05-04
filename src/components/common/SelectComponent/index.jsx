/* eslint-disable react/prop-types */
import Select from "react-select";
import styleDefault from "./styleSelect";

export default function SelectComponent({
  options = [],
  placeholder,
  getValueSelect,
  selectRef,
  value,
  isDisabled,
  classNames,
  isClearable,
  styleSelect,
}) {
  return (
    <>
      <Select
        value={value}
        ref={selectRef}
        styles={styleSelect || styleDefault}
        isClearable={isClearable}
        options={options}
        classNamePrefix="select"
        placeholder={placeholder}
        noOptionsMessage={() => "ko tim thay"}
        onChange={(e) => getValueSelect(e)}
        isDisabled={isDisabled}
        className={classNames}
      />
    </>
  );
}
