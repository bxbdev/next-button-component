import { DefaultTheme } from "styled-components";
import { ColorProps } from "@/types/StyleType";

export const defaultTheme: DefaultTheme = {
  name: "default",
  fontSize: "14px",
  borderRadius: "6px",
  borderWidth: "2px",
  borderStyle: "solid",
  bodyColor: ColorProps.mintCream,
  textColor: ColorProps.black,
  size: {
    sm: "6px 12px",
    md: "8px 16px",
    lg: "11px 22px",
  },
  palette: {
    common: {
      black: ColorProps.black,
      white: ColorProps.white,
    },
    default: {
      main: ColorProps.gray,
      contrastText: ColorProps.deepGray,
      hoverColor: ColorProps.lightGray,
      shadowColor: ColorProps.jetGray,
      outlineColorHover: ColorProps.jetGray,
      disabled: ColorProps.cadetGray,
    },
    primary: {
      main: ColorProps.blue,
      contrastText: ColorProps.white,
      hoverColor: ColorProps.persianBlue,
      shadowColor: ColorProps.persianBlue,
      outlineColorHover: ColorProps.persianBlue,
      disabled: ColorProps.persianBlue,
    },
    secondary: {
      main: ColorProps.paynesGray,
      contrastText: ColorProps.white,
      hoverColor:  ColorProps.gunmetal,
      shadowColor: ColorProps.paynesGray,
      outlineColorHover: ColorProps.paynesGray,
      disabled: ColorProps.paynesGray,
    },
    danger: {
      main: ColorProps.red,
      contrastText: ColorProps.white,
      hoverColor: ColorProps.pennRed,
      shadowColor: ColorProps.persianRed,
      outlineColorHover: ColorProps.persianRed,
      disabled: ColorProps.persianRed,
    },
  },
};