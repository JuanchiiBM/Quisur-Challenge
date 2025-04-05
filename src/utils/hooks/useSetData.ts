import { ErrorAlert } from "@/components/sweetAlert";
import { useGlobalContext } from "../context/useGlobalContext";
import { GETFunction } from "@/utils/helpers/fetchFunctions";
import { useEffect, useState } from "react";

const useSetData = (endpoint: string, refreshData?: number) => {
    const [value, setValue] = useState<any>()
    const {setSpinner} = useGlobalContext()

    const setFunction = async () => {
        try {
            setSpinner(true)
            const response = await GETFunction(endpoint);
            setSpinner(false)
            setValue(response)
        } catch (error: any) {
            setSpinner(false)
            ErrorAlert('Error', error);
        }
    };

    useEffect(() => {
        console.log('EEEEEEEEEEEEEEEEEEEEEEEEEEEEE')
        setFunction();
    }, [refreshData]);

    return value;
};

export default useSetData;
