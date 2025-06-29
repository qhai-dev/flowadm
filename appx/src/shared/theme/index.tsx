import { ReactNode, useEffect, useState, createContext, useContext } from 'react'

type Theme = "dark" | "light" | "system"

type ThemeProviderProps = {
    children: ReactNode,
    defaultTheme?: Theme
}

type ThemeProviderState = {
    theme: Theme
    setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
    theme: "system",
    setTheme: () => null,
}

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({ children, defaultTheme = "system" }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>(
        () => (localStorage.getItem(process.env.PUBLIC_LOCAL_STORAGE_THEME_KEY) as Theme) || defaultTheme
    )

    useEffect(() => {
        const root = window.document.documentElement
        root.removeAttribute("data-theme")

        if (theme === "system") {
            const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
                .matches
                ? "dark"
                : "light"

            root.setAttribute("data-theme",systemTheme)
            return
        }

        root.setAttribute("data-theme",theme)
    }, [theme])

    const value = {
        theme,
        setTheme: (theme: Theme) => {
            localStorage.setItem(process.env.PUBLIC_LOCAL_STORAGE_THEME_KEY, theme)
            setTheme(theme)
        },
    }

    return (
        <ThemeProviderContext.Provider value={value}>
            {children}
        </ThemeProviderContext.Provider>
    )
}

export const useTheme = () => {
    return useContext(ThemeProviderContext)
}


