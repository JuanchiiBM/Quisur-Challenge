import { ProductProps } from "@/types/productProps"

const useSetDataObject = ({ dataForm }: { dataForm?: ProductProps}) => {

    const _dataObject = {
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