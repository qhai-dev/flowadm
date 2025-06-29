import { useTheme } from '@/shared/theme'

export default function Page() {
    const { theme, setTheme }  = useTheme()
    const  handleThemeChange = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    return (
        <div className=" w-full h-full rounded-2xl bg-white dark:bg-black dark:text-white text-black">
           login page
            { theme }
            <button onClick={handleThemeChange}>theme change</button>
        </div>
    )
}