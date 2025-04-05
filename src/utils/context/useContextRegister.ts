import React, { createContext, useContext } from "react";

interface ContextRegisterProps {
    refreshData: number
    setRefreshData: React.Dispatch<React.SetStateAction<number>>
    contentOfRegister: any | undefined
    setContentOfRegister: React.Dispatch<React.SetStateAction<any>>
    isUpdate: boolean
    setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>;
    dataForm: any
    setDataForm: React.Dispatch<React.SetStateAction<any>>;
    handleInputChange: (field: any, value: any) => void
}


export const ContextRegister = createContext<ContextRegisterProps>({
    refreshData: 2,
    setRefreshData: () => { },
    contentOfRegister: undefined,
    setContentOfRegister: () => {},
    isUpdate: false,
    setIsUpdate: () => {},
    dataForm: {},
    setDataForm: () => {},
    handleInputChange: () => {}
});

export const useContextRegister = () => {
    return useContext(ContextRegister);
};
