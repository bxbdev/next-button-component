import "styled-components";
import { ThemeType } from "./components/themes"
// interface IPalette {
//   [key: string]: string
// }
// we'll use a very simple theme with  palette and colors

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
