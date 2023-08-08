import React, { ReactElement } from 'react'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'
import { defaultTheme, darkTheme } from './themes'

type ThemeProviderProps = {
    children: React.ReactNode | ReactElement
    themeMode: string
}

const ThemeProvider = ({ children, themeMode} : ThemeProviderProps ) => {
    const theme = themeMode == 'dark' ? darkTheme : defaultTheme

    return (
        <StyledThemeProvider theme={theme}>
            {children}
        </StyledThemeProvider>
    )
}

export default ThemeProvider