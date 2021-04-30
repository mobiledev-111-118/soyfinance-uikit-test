import { darkColors, lightColors } from "../../theme/colors";
import { PancakeToggleTheme } from "./types";

export const light: PancakeToggleTheme = {
  handleBackground: lightColors.backgroundAlert,
  handleShadow: lightColors.textDisabled,
};

export const dark: PancakeToggleTheme = {
  handleBackground: darkColors.backgroundAlert,
  handleShadow: darkColors.textDisabled,
};
