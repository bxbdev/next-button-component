import { ReactElement, ReactNode } from 'react'
import type { AppProps } from "next/app"
import { NextPage } from 'next'
import 'tailwindcss/tailwind.css'
import ThemeProvider from '@/components/ThemeProvider'

export type NextPageWithProps<P = unknown, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppWithProps = AppProps & {
  Component: NextPageWithProps;
};

function App({ Component, pageProps }: AppWithProps) {
  const getLayout = Component.getLayout ?? ((page: ReactElement) =>  page)

  return (
    <>
    <ThemeProvider>
        {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
    </>
  );
}
export default App;