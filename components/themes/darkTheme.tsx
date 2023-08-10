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
  textColor: ColorProps.deepPurple,
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
      main: "#666666",
      contrastText: ColorProps.white,
      shadowColor: hexToRgba(ColorProps.jetGray, .4),
      outline: {
        contrastText: ColorProps.lightGray,
        borderColor: "#666666",
      },
      text: {
        contrastText: ColorProps.lightGray,
      },
      hover: {
        main: hexToRgba(ColorProps.jetGray, 1),
        contrastText: ColorProps.white,
        outline: {
          main: hexToRgba(ColorProps.lightGray, .3),
        },
        text: {
          main: hexToRgba(ColorProps.lightGray, .3),
        }
      },
      disabled: {
        main: hexToRgba(ColorProps.deepGray, .4),
        contrastText: hexToRgba(ColorProps.gray, .4),
        borderColor: hexToRgba(ColorProps.lightGray, .4),
        outline: {
          contrastText: hexToRgba(ColorProps.lightGray, .5)
        },
        text: {
          contrastText: hexToRgba(ColorProps.lightGray, .5)
        }
      },
      active: {
        main: ColorProps.orange,
        contrastText: ColorProps.white
      }
    },
    primary: {
      main: ColorProps.purple,
      contrastText: ColorProps.white,
      shadowColor: hexToRgba(ColorProps.persianBlue, .4),
      outline: {
        contrastText: "#c99cff",
        borderColor: "#c99cff",
      },
      text: {
        contrastText: ColorProps.purple,
      },
      hover: {
        main: ColorProps.deepPurple,
        contrastText: ColorProps.white,
        outline: {
          main: hexToRgba("#771ae9", .3),
          contrastText: "#ac69ff",
        },
        text: {
          main: hexToRgba("#771ae9", .3),
        }
      },
      disabled: {
        main: hexToRgba(ColorProps.purple, .4),
        contrastText: hexToRgba(ColorProps.white, .4),
        borderColor: hexToRgba(ColorProps.purple, .4),
        outline: {
          contrastText: hexToRgba("#c99cff", .5),
          borderColor: hexToRgba("#c99cff", .4),
        },
        text: {
          contrastText: hexToRgba(ColorProps.purple, .6)
        }
      },
    },
    secondary: {
      main: "#7ba000",
      contrastText: ColorProps.white,
      shadowColor: hexToRgba("#a6c63f", .4),
      outline: {
        contrastText: "#a6c63f",
        borderColor: "#7ba000",
      },
      text: {
        contrastText: "#ccd5ae",
      },
      hover: {
        main: "#5d7900",
        contrastText: ColorProps.white,
        outline: {
          main: hexToRgba("#7ba000", .3),
        },
        text: {
          main: hexToRgba("#7ba000", .3),
        }
      },
      disabled: {
        main: hexToRgba("#7ba000", .4),
        contrastText: hexToRgba("#7ba000", .4),
        borderColor:  hexToRgba("#7ba000", .4),
        outline: {
          contrastText: hexToRgba("#7ba000", .4),
        },
        text: {
          contrastText: hexToRgba("#7ba000", .4)
        }
      },
    },
    danger: {
      main: ColorProps.pink,
      contrastText: ColorProps.white,
      shadowColor: hexToRgba(ColorProps.pink, .4),
      outline: {
        contrastText: ColorProps.pink,
        borderColor: ColorProps.pink,
      },
      text: {
        contrastText: ColorProps.pink,
      },
      hover: {
        main: ColorProps.deepPink,
        contrastText: ColorProps.white,
        outline: {
          main: hexToRgba(ColorProps.pink, .3),
        },
        text: {
          main: hexToRgba(ColorProps.pink, .3),
        }
      },
      disabled: {
        main: hexToRgba(ColorProps.pink, .4),
        contrastText: hexToRgba(ColorProps.white, .4),
        borderColor: hexToRgba(ColorProps.pink, .4),
        outline: {
          contrastText: hexToRgba(ColorProps.pink, .5)
        },
        text: {
          contrastText: hexToRgba(ColorProps.pink, .5)
        }
      },
    },
  },
};