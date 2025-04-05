import { ProductProps } from "@/types/productProps"
import { useEffect } from "react"

interface UseUpdateProps {
    setDataForm: React.Dispatch<React.SetStateAction<ProductProps | undefined>>,
    contentOfRegister: ProductProps | undefined,
    isOpen: boolean | undefined
}

const useUpdate = ({ setDataForm, contentOfRegister, isOpen }: UseUpdateProps) => {

    useEffect(() => {
        if (contentOfRegister)
        setDataForm({
            id: contentOfRegister.id,
            name: contentOfRegister.name,
            categoryId: contentOfRegister.categoryId,
            categoryName: contentOfRegister.categoryName,
            acquisitionDate: contentOfRegister.acquisitionDate,
            supplier: contentOfRegister.supplier,
            quantity: contentOfRegister.quantity,
            totalPrice: contentOfRegister.totalPrice
        })
    }, [isOpen])
}

export default useUpdate