import { lightTheme } from "./lightTheme"
import { darkTheme } from "./darkTheme"

export type ThemeType = typeof lightTheme
const theme = lightTheme

export { lightTheme, darkTheme }
export default theme