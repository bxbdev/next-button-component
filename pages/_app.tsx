import type { AppProps } from "next/app";
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from "styled-components"
import { ColorProps } from "@/types/StyleType"
import { defaultTheme } from "@/components/themes/defaultTheme";

function App({ Component, pageProps }: AppProps) {

  const theme = defaultTheme

  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
export default App;