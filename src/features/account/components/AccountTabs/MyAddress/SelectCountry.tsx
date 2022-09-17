import React, { forwardRef, useMemo } from "react";
import Select, { StylesConfig } from "react-select";
import countryList from "react-select-country-list";
import { SelectStyles } from "@/components/Shared";

export const SelectCountry = forwardRef((props: any, ref: any) => {
  const options = useMemo(() => countryList().getData(), []);

  const styles: StylesConfig = {
    ...SelectStyles,

    container: () => ({
      fontSize: 13,
      border: "none",
      zIndex: 100,
      outline: "none",
      position: "relative",
    }),

    control: (styles) => ({
      ...styles,
      backgrounColor: "transparent",
      border: "1px solid #ced1d3",
      borderRadius: 5,
      boxShadow: "none",
      cursor: "pointer",
      fontSize: 14,
      marginTop: "8px",

      ":hover": {
        borderColor: "#111",
      },

      ":focus": {
        borderColor: "#111",
      },
    }),
  };

  return (
    <Select
      instanceId="select-country-id-75832"
      options={options}
      styles={styles}
      ref={ref}
      value={props.value}
      onChange={props.onChange}
    />
  );
});

SelectCountry.displayName = "SelectCountry";