import "styled-components";
// interface IPalette {
//   [key: string]: string
// }
// we'll use a very simple theme with  palette and colors
declare module 'styled-components' {
  export interface DefaultTheme {
    name: string
    fontSize: string
    borderRadius: string
    borderWidth: string
    borderStyle: string
    bodyColor: string
    textColor: string
    size: {
      sm: string
      md: string
      lg: string
    }
    palette: {
      common: {
        black: string
        white: string
      }
      default: {
        main: string
        contrastText: string
        colorHover: string
        shadowColor: string
        outlineHover: string
        disabled: string
      },
      primary: {
        main: string
        contrastText: string
        colorHover: string
        shadowColor: string
        outlineHover: string
        disabled: string
      },
      secondary: {
        main: string
        contrastText: string
        colorHover: string
        shadowColor: string
        outlineHover: string
        disabled: string
      },
      danger: {
        main: string
        contrastText: string
        colorHover: string
        shadowColor: string
        outlineHover: string
        disabled: string
      },
    }
  }
}