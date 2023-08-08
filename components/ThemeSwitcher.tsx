import Button from './button'

type ThemeSwitcherProps = {
    onThemeChange: (theme: string) => void
}

const ThemeSwitcher = ({ onThemeChange }: ThemeSwitcherProps) => {

    const changeTheme = (theme: string) => {
        onThemeChange(theme)
    }

    return (
        <div className="flex justify-center gap-5 pt-10">
            <Button  onClick={() => changeTheme('default')}>Light theme</Button>
            <Button onClick={() => changeTheme('dark')}>Dark theme</Button>
        </div>
    )
}

export default ThemeSwitcher