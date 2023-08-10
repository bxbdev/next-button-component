import { ReactNode } from 'react'
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components'
import ThemeSwitcher from './ThemeSwitcher'
import useThemeSwitcher from '@/hooks/useThemeSwitcher'
import { GlobalStyle } from '@/components/themes/globalStyle'
type ThemeProviderProps = {
    children: ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps ) => {
    const [ theme, handleThemeChange ] = useThemeSwitcher()

    return (
        <StyledThemeProvider theme={theme}>
            <GlobalStyle />
            <ThemeSwitcher name={theme.name} onThemeChange={handleThemeChange} />
            {children}
        </StyledThemeProvider>
    )
}

export default ThemeProvider