import { useEffect, useState } from "react"
import { RangeValue, DateValue } from "@heroui/react";
import { ProductProps } from "@/types/productProps";

const useForm = () => {
    const [dataForm, setDataForm] = useState<ProductProps>()

    const handleInputChange = (field: string, value: string | RangeValue<any> | DateValue | undefined | null) => {
        setDataForm((prev: any) => ({
            ...prev,
            [field]: value,
        }))
    };

    useEffect(() => {
        console.log(dataForm)
    }, [dataForm])

    return {dataForm, setDataForm, handleInputChange}
}

export default useForm