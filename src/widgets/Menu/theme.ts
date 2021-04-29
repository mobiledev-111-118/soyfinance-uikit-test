import { darkColors, lightColors } from "../../theme/colors";
import { NavTheme } from "./types";

export const light: NavTheme = {
  background: lightColors.backgroundAlt,
  headerbackground: lightColors.backgroundHeader,
  hover: "#EEEAF4",
};

export const dark: NavTheme = {
  background: darkColors.backgroundAlt,
  headerbackground: darkColors.backgroundHeader,
  hover: "#473d5d",
};
