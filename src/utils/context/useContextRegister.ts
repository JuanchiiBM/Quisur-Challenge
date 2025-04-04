import React, { createContext, useContext } from "react";

interface ContextRegisterProps {
    refreshData?: number
    setRefreshData?: React.Dispatch<React.SetStateAction<number>>
    contentOfRegister: any | undefined
    setContentOfRegister: React.Dispatch<React.SetStateAction<any>>
    update?: boolean
    setUpdate?: React.Dispatch<React.SetStateAction<boolean>>;
    jsonData?: any
    jsonIsLoading?: boolean
    dataForm?: any
    handleInputChange?: (field: any, value: any) => void
}


export const ContextRegister = createContext<ContextRegisterProps>({
    refreshData: 2,
    setRefreshData: () => { },
    contentOfRegister: undefined,
    setContentOfRegister: () => {},
    update: false,
    setUpdate: () => {},
    jsonData: undefined,
    jsonIsLoading: false,
    dataForm: {},
    handleInputChange: () => {}
});

export const useContextRegister = () => {
    return useContext(ContextRegister);
};
