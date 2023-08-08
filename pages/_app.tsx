import React, { useState, useEffect, ReactElement, ReactNode } from 'react'
import type { AppProps } from "next/app"
import { NextPage } from 'next'
import 'tailwindcss/tailwind.css'
import { ThemeProvider } from "styled-components"
import { defaultTheme, darkTheme } from "@/components/themes"
import { GlobalStyle } from "@/components/themes/globalStyle"
import ThemeSwitcher from '@/components/ThemeSwitcher'

export type NextPageWithProps<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppWithProps = AppProps & {
  Component: NextPageWithProps;
};

function App({ Component, pageProps }: AppWithProps) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) =>  page)

  const [currentTheme, setCurrentTheme] = useState(defaultTheme)

  useEffect(() => {

  }, [currentTheme])

  const handleThemeChange = ( updateTheme: string ) => {
    if (updateTheme == 'dark') {
      setCurrentTheme(darkTheme)
    }
    if (updateTheme == 'default') {
      setCurrentTheme(defaultTheme)
    }
  }

  return (
    <React.Fragment>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle />
        <ThemeSwitcher onThemeChange={handleThemeChange} />
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </React.Fragment>
  );
}
export default App;