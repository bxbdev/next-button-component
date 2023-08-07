import React, { ReactElement, ReactNode } from 'react'
import type { AppProps } from "next/app"
import { NextPage } from 'next'
import 'tailwindcss/tailwind.css'
import { ThemeProvider, useTheme } from "styled-components"
import { defaultTheme, darkTheme } from "@/components/themes"
import { GlobalStyle } from "@/components/themes/globalStyle"


export type NextPageWithProps<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppWithProps = AppProps & {
  Component: NextPageWithProps;
};

function App({ Component, pageProps }: AppWithProps) {

  const getLayout = Component.getLayout || ((page: ReactElement) => page)

  const theme = defaultTheme

  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </React.Fragment>
  );
}
export default App;