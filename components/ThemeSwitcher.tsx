import Button from './button'
import { LuSunMedium, LuMoon } from "react-icons/lu";

type ThemeSwitcherProps = {
    name: string
    onThemeChange: ((themeName: string) => void)
}

const ThemeSwitcher = ({name, onThemeChange }: ThemeSwitcherProps) => {

    return (
        <div className="flex justify-center gap-5 pt-10 px-10">
            <Button
                className={name === 'light' ? 'active' : ''}
                $active={name === 'light'}
                onClick={() => onThemeChange('light')}
            >
                <LuSunMedium className="text-2xl" />
            </Button>
            <Button
                className={name === 'dark' ? 'active' : ''}
                $active={name === 'dark'}
                onClick={() => onThemeChange('dark')}
            >
                <LuMoon className="text-2xl" />
            </Button>
        </div>
    )
}

export default ThemeSwitcher