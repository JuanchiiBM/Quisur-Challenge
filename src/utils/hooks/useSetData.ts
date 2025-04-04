import { ErrorAlert } from "@/components/sweetAlert";
import { useGlobalContext } from "../context/useGlobalContext";
import { GETFunction } from "@/utils/functions/fetchFunctions";
import { useEffect, useState } from "react";

const useSetData = (endpoint: string) => {
    const [value, setValue] = useState<any>()
    const {setSpinner} = useGlobalContext()

    const setFunction = async () => {
        try {
            setSpinner(true)
            const response = await GETFunction(endpoint);
            // Añado esto para simular un retraso
            setTimeout(() => {

            }, 1000)
            setSpinner(false)
            setValue(response)
        } catch (error: any) {
            setSpinner(false)
            ErrorAlert('Error', error);
        }
    };

    useEffect(() => {
        setFunction();
    }, []);

    return value;
};

export default useSetData;
