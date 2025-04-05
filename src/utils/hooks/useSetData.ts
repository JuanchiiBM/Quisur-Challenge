import { ErrorAlert } from "@/components/sweetAlert";
import { useGlobalContext } from "../context/useGlobalContext";
import { GETFunction } from "@/utils/helpers/fetchFunctions";
import { useEffect, useState } from "react";

const useSetData = (endpoint: string, refreshData?: number) => {
    const [value, setValue] = useState<any>()

    const setFunction = async () => {
        try {
            const response = await GETFunction(endpoint);
            if (response) { //En este caso sería necesario un response.ok o response.status == 'ok'
                setValue(response)
            } else if (response.error) { //A fines prácticos, asumimos que existe un parametro "error" si es que hay algún error
                throw new Error(response.error)
            }
        } catch (error: any) {
            ErrorAlert('Error', error);
        }
    };

    useEffect(() => {
        setFunction();
    }, [refreshData]);

    return value;
};

export default useSetData;
