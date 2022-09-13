import { StylesConfig } from "react-select";

export const SelectStyles: StylesConfig = {
  container: () => ({
    fontSize: 13,
    width: 180,
    border: "none",
    zIndex: 100,
    outline: "none",
  }),

  indicatorsContainer: () => ({
    all: "unset",
    width: 30,
    height: "100%",
    padding: "0 !important",
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  control: (styles) => ({
    ...styles,
    backgrounColor: "transparent",
    border: 0,
    borderRadius: 0,
    boxShadow: "none",
    cursor: "pointer",
  }),

  option: (styles) => {
    return {
      ...styles,
      fontSize: 13,
      background: "none",
      color: "black",
      cursor: "pointer",

      ":hover": {
        color: "#333",
      },

      ":active": {
        background: "none",
      },
    };
  },

  menu: (styles) => ({
    ...styles,
    width: "50%",
    left: "50%",
    zIndex: 100,
  }),

  placeholder: (styles) => ({
    ...styles,
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis",
  }),
};
