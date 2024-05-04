/* eslint-disable no-unused-vars */
const styleSelect = {
  option: (baseStyles, { isSelected }) => ({
    ...baseStyles,
    backgroundColor: isSelected ? "#3c3c3c !important" : "transparent",
    // color: "white",
    cursor: "pointer",
    fontWeight: isSelected ? "bold" : "normal",
    letterSpacing: "-0.05rem",
    fontSize: "1.6rem",
    width: "97%",
    borderRadius: ".7rem",
    margin: ".5rem auto",

    "&:hover": { backgroundColor: "#787878", color: "white" },
  }),

  singleValue: (baseStyles) => ({
    ...baseStyles,
    fontWeight: "bold",
    // letterSpacing: "-0.05rem",
    fontSize: "1.6rem",
  }),

  menu: (baseStyles) => ({
    ...baseStyles,
    borderRadius: ".5rem",
  }),

  indicatorSeparator: (baseStyles) => ({
    ...baseStyles,
    backgroundColor: "#616161",
    "&:hover": {
      backgroundColor: "#616161",
    },
  }),

  dropdownIndicator: (baseStyles, { isFocused }) => ({
    ...baseStyles,
    color: isFocused ? "white" : "#616161",
    "&:hover": {
      color: "white",
    },
    display: "none",
  }),

  control: (baseStyle, state) => ({
    ...baseStyle,
    width: "250px",
    fontSize: "1.5rem",
    borderRadius: ".8rem",
    textAlign: "center",
    padding: "5px",
  }),
  clearIndicator: (baseStyle, state) => ({
    ...baseStyle,
    // border: ".2rem solid black",
  }),
  noOptionsMessage: (baseStyle, state) => ({
    ...baseStyle,
    fontSize: "1.5rem",
  }),
};
export default styleSelect;
