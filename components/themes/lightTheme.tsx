import { DefaultTheme } from "styled-components"
import { ColorProps } from "@/types/StyleType"
import { hexToRgba } from "@/utils/colorUtils"

export const lightTheme: DefaultTheme = {
  name: "light",
  fontSize: "14px",
  borderRadius: "6px",
  borderWidth: "2px",
  borderStyle: "solid",
  bodyColor: ColorProps.mintCream,
  textColor: "#888",
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
      shadowColor: hexToRgba(ColorProps.jetGray, .4),
      outline: {
        contrastText: ColorProps.deepGray,
        borderColor: ColorProps.deepGray,
      },
      text: {
        contrastText: ColorProps.deepGray,
      },
      hover: {
        main: ColorProps.lightGray,
        contrastText: ColorProps.deepGray,
        outline: {
          main: hexToRgba(ColorProps.jetGray, .2),
        },
        text: {
          main: hexToRgba(ColorProps.jetGray, .2),
        }
      },
      disabled: {
        main: ColorProps.gray,
        contrastText: hexToRgba(ColorProps.deepGray, .4),
        borderColor: hexToRgba(ColorProps.jetGray, .4),
        outline: {
          contrastText: hexToRgba(ColorProps.deepGray, .4)
        },
        text: {
          contrastText: hexToRgba(ColorProps.deepGray, .4)
        }
      },
      active: {
        main: ColorProps.sky,
        contrastText: ColorProps.white
      }
    },
    primary: {
      main: ColorProps.blue,
      contrastText: ColorProps.white,
      shadowColor: hexToRgba(ColorProps.persianBlue, .4),
      outline: {
        contrastText: ColorProps.blue,
        borderColor: ColorProps.blue,
      },
      text: {
        contrastText: ColorProps.blue,
      },
      hover: {
        main: ColorProps.persianBlue,
        contrastText: ColorProps.white,
        outline: {
          main: hexToRgba(ColorProps.persianBlue, .1),
        },
        text: {
          main: hexToRgba(ColorProps.persianBlue, .1),
        }
      },
      disabled: {
        main: hexToRgba(ColorProps.persianBlue, .4),
        contrastText: hexToRgba(ColorProps.white, .6),
        borderColor: hexToRgba(ColorProps.persianBlue, .4),
        outline: {
          contrastText: hexToRgba(ColorProps.persianBlue, .4)
        },
        text: {
          contrastText: hexToRgba(ColorProps.paynesGray, .4)
        }
      },
    },
    secondary: {
      main: ColorProps.paynesGray,
      contrastText: ColorProps.white,
      shadowColor: hexToRgba(ColorProps.paynesGray, .4),
      outline: {
        contrastText: ColorProps.paynesGray,
        borderColor: ColorProps.paynesGray,
      },
      text: {
        contrastText: ColorProps.paynesGray,
      },
      hover: {
        main: ColorProps.gunmetal,
        contrastText: ColorProps.white,
        outline: {
          main: hexToRgba(ColorProps.paynesGray, .1),
        },
        text: {
          main: hexToRgba(ColorProps.paynesGray, .1),
        }
      },
      disabled: {
        main: hexToRgba(ColorProps.paynesGray, .4),
        contrastText: hexToRgba(ColorProps.white, .6),
        borderColor:  hexToRgba(ColorProps.paynesGray, .4),
        outline: {
          contrastText: hexToRgba(ColorProps.paynesGray, .4),
        },
        text: {
          contrastText: hexToRgba(ColorProps.paynesGray, .4)
        }
      },
    },
    danger: {
      main: ColorProps.red,
      contrastText: ColorProps.white,
      shadowColor: hexToRgba(ColorProps.persianRed, .4),
      outline: {
        contrastText: ColorProps.red,
        borderColor: ColorProps.red,
      },
      text: {
        contrastText: ColorProps.red,
      },
      hover: {
        main: ColorProps.pennRed,
        contrastText: ColorProps.white,
        outline: {
          main: hexToRgba(ColorProps.persianRed, .1),
        },
        text: {
          main: hexToRgba(ColorProps.persianRed, .1),
        }
      },
      disabled: {
        main: hexToRgba(ColorProps.red, .4),
        contrastText: hexToRgba(ColorProps.white, .6),
        borderColor: hexToRgba(ColorProps.red, .4),
        outline: {
          contrastText: hexToRgba(ColorProps.red, .4)
        },
        text: {
          contrastText: hexToRgba(ColorProps.red, .4)
        }
      },
    },
  },
};