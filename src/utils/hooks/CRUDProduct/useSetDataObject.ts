import { ProductProps } from "@/types/productProps"
import { useEffect } from "react"

const useSetDataObject = ({ dataForm }: { dataForm?: ProductProps}) => {

    const _dataObject = {
        id: dataForm?.id,
        name: dataForm?.name,
        acquisitionDate: dataForm?.acquisitionDate,
        categoryId: dataForm?.categoryId,
        categoryName: dataForm?.categoryName,
        totalPrice: dataForm?.totalPrice,
        quantity: dataForm?.quantity,
        supplier: dataForm?.supplier,
    }

    return { _dataObject }
}

export default useSetDataObject