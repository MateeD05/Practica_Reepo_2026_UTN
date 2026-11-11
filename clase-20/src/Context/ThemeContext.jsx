import { createContext, useState } from "react";


export const ThemeContext = createContext()

export function ThemeContextProvider ({children}){
    const [theme, setTheme] = useState("light")

    const providerValues = {
        theme: theme
    }
    return(
        <ThemeContext.Provider value={providerValues}>
            {children}
        </ThemeContext.Provider>
    )
}