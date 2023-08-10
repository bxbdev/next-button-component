import { useState, useEffect, useCallback } from 'react'
import { lightTheme, darkTheme } from '@/components/themes'
import type { ThemeType } from '@/components/themes'
import { DefaultTheme } from 'styled-components';


const useThemeSwitcher = () => {
    const [theme, setTheme] = useState(lightTheme)

    const handleThemeChange = useCallback( (themeName: string ) => {
        const newTheme = themeName === 'light' ? lightTheme : darkTheme
        window.localStorage.setItem('theme', JSON.stringify(newTheme))
        setTheme(newTheme)
    }, [setTheme])

    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme')
        localTheme && setTheme(JSON.parse(localTheme))
    }, [])

    return [ theme, handleThemeChange ]

}

export default useThemeSwitcher