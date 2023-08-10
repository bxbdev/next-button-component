import { ReactNode, useState, useEffect, useCallback } from 'react'
import { ThemeProvider as StyledThemeProvider, DefaultTheme } from 'styled-components'
import { GlobalStyle } from '@/components/themes/globalStyle'
import Button from './button'
import { LuSunMedium, LuMoon } from "react-icons/lu";
import { lightTheme, darkTheme, type ThemeType } from './themes'

type ThemeProviderProps = {
    children: ReactNode
}

const ThemeProvider = ({ children }: ThemeProviderProps ) => {
    const [theme, setTheme] = useState<ThemeType>(lightTheme)

    const handleThemeChange = useCallback( (themeName: string ) => {
        const newTheme = themeName === 'light' ? lightTheme : darkTheme
        window.localStorage.setItem('theme', JSON.stringify(newTheme))
        setTheme(newTheme)
    }, [setTheme])

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme')
        localTheme && setTheme(JSON.parse(localTheme))
    }, [])


    const ThemeSwitcher = () => {
        return (
            <div className="flex justify-center gap-5 pt-10 px-10">
                <Button
                    className={theme.name === 'light' ? 'active' : ''}
                    $active={theme.name === 'light'}
                    onClick={() => handleThemeChange('light')}
                >
                    <LuSunMedium className="text-2xl" />
                </Button>
                <Button
                    className={theme.name === 'dark' ? 'active' : ''}
                    $active={theme.name === 'dark'}
                    onClick={() => handleThemeChange('dark')}
                >
                    <LuMoon className="text-2xl" />
                </Button>
            </div>
        )
    }


    return (
        <StyledThemeProvider theme={theme}>
            <GlobalStyle />
            <ThemeSwitcher />
            {children}
        </StyledThemeProvider>
    )
}

export default ThemeProvider