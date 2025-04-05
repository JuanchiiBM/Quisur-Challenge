import React, { createContext, useContext } from "react";

interface GlobalContextProps {
    spinner: boolean;
    setSpinner: React.Dispatch<React.SetStateAction<boolean>>;
    theme: string | undefined;
    setTheme: any;
}

export const GlobalContext = createContext<GlobalContextProps>({
    spinner: false,
    setSpinner: () => {},
    theme: "light",
    setTheme: () => {},
});

export const useGlobalContext = () => {
    return useContext(GlobalContext);
};
