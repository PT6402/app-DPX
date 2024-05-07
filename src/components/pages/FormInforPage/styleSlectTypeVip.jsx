/* eslint-disable no-unused-vars */
const styleSelect = {
  option: (baseStyles, { isSelected }) => ({
    ...baseStyles,
    backgroundColor: isSelected ? "#3c3c3c !important" : "transparent",
    cursor: "pointer",
    fontWeight: isSelected ? "bold" : "normal",
    letterSpacing: "-0.05rem",
    fontSize: "1.4rem",
    width: "97%",
    borderRadius: ".7rem",
    margin: ".5rem auto",

    "&:hover": { backgroundColor: "#787878", color: "white" },
  }),

  singleValue: (baseStyles) => ({
    ...baseStyles,
    fontWeight: "bold",
    fontSize: "1.3rem",
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
    width: "100%",
    fontSize: "1.5rem",
    borderRadius: ".8rem",
    textAlign: "center",
    padding: "5px",
    border: ".01rem solid gray",
  }),
  clearIndicator: (baseStyle, state) => ({
    ...baseStyle,
  }),
  noOptionsMessage: (baseStyle, state) => ({
    ...baseStyle,
    fontSize: "1.5rem",
  }),
};
export default styleSelect;
