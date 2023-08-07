import { DefaultTheme } from "styled-components"
import { ColorProps } from "@/types/StyleType"
import { hexToRgba } from "@/utils/colorUtils"

export const darkTheme: DefaultTheme = {
  name: "dark",
  fontSize: "14px",
  borderRadius: "6px",
  borderWidth: "2px",
  borderStyle: "solid",
  bodyColor: ColorProps.black,
  textColor: ColorProps.white,
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
      main: ColorProps.deepGray,
      contrastText: ColorProps.lightGray,
      colorHover: ColorProps.gray,
      shadowColor: hexToRgba(ColorProps.jetGray, .4),
      outlineHover: hexToRgba(ColorProps.lightGray, .5),
      disabled: hexToRgba(ColorProps.lightGray, .5)
    },
    primary: {
      main: ColorProps.blue,
      contrastText: ColorProps.white,
      colorHover: ColorProps.persianBlue,
      shadowColor: hexToRgba(ColorProps.persianBlue, .4),
      outlineHover: hexToRgba(ColorProps.persianBlue, .5),
      disabled: hexToRgba(ColorProps.persianBlue, .4),
    },
    secondary: {
      main: ColorProps.paynesGray,
      contrastText: ColorProps.white,
      colorHover:  ColorProps.gunmetal,
      shadowColor: hexToRgba(ColorProps.paynesGray, .4),
      outlineHover: hexToRgba(ColorProps.paynesGray, .5),
      disabled: hexToRgba(ColorProps.paynesGray, .4),
    },
    danger: {
      main: ColorProps.red,
      contrastText: ColorProps.white,
      colorHover: ColorProps.pennRed,
      shadowColor: hexToRgba(ColorProps.persianRed, .4),
      outlineHover: hexToRgba(ColorProps.persianRed, .5),
      disabled: hexToRgba(ColorProps.persianRed, .4),
    },
  },
};