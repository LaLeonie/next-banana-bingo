import React from "react";
import { ThemeProvider } from "styled-components";

export const theme = {
  colors: {
    black: "#050506",
    white: "#fff",
    neutrals: {
      50: "#F4FAFF",
      100: "#cbd7e0",
      200: "#819eb3",
      300: "#6186a0",
      400: "#476376",
      500: "#344856",
      600: "#212d36",
    },
    primaries: {
      red: {
        light: "#FF745E",
        main: "#FF3A1A",
        dark: "#D51E00",
        darkest: "#B40000",
      },
      orange: {
        light: "#FFAE44",
        main: "#FF9000",
        dark: "#DD7D00",
        darkest: "#A64800",
      },
      yellow: {
        lightest: "#ffe298",
        light: "#FFD465",
        main: "#FFC121",
        dark: "#EDAB00",
        darkest: "#cb9200",
      },
      purple: {
        light: "#D57BCA",
        main: "#C448B5",
        dark: "#A43597",
        darkest: "#64205c",
      },
      blue: {
        lightest: "#b6cfff",
        light: "#84aefe",
        main: "#4082FE",
        dark: "#005adf",
        darkest: "#012261",
      },
      green: {
        lightest: "#a2e977",
        light: "#8EE45A",
        main: "#67D723",
        dark: "#3d7f15",
        darkest: "#005A00",
      },
      brown: {
        lightest: "#E19C60",
        light: "#C38147",
        main: "#A6682F",
        dark: "#763F04",
        darkest: "#573619",
      },
    },
  },
  fonts: {
    regular: ["Neucha", "sans-serif"],
    display: ["Ranchers", "sans-serif"],
  },
  fontSizes: {
    small: "0.875rem",
    regular: "1rem",
    regularPlus: "2rem",
    medium: "3rem",
    large: "3.75rem",
    xl: "6rem",
    xxl: "10rem",
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
