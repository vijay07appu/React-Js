import { useContext } from "react";
import { createContext } from "react";

export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},
    lightTheme:()=>{},
})

export const ThemeProvider=ThemeContext.Provider





// It is a user customized hook 
export default function useTheme(){
    return useContext(ThemeContext)
}