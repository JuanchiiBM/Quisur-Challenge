import DefaultLayout from '@/components/layout/main'
import TableComponent from '@/components/table'
import OptionsComponent from '@/components/options'
import ModalComponent from '@/components/modal'
import ModalRegister from '@/components/table/modalRegister'
import { ContextRegister } from '@/utils/context/useContextRegister'
import { useDisclosure } from '@heroui/react'
import { ProductProps } from '@/types/productProps'
import { useState } from 'react'
import useGetProductsData from '@/utils/hooks/table/useGetProductsData'
import useForm from '@/utils/hooks/table/useForm'
import useSetDataObject from '@/utils/hooks/table/useSetDataObject'

const urlPostAndPut = '/products'

const TablePage = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [refreshData, setRefreshData] = useState<number>(0)
    const [isUpdate, setIsUpdate] = useState<boolean>(false)

    const { dataForm, handleInputChange } = useForm()
    const { _dataObject } = useSetDataObject({ dataForm })

    const [contentOfRegister, setContentOfRegister] = useState<ProductProps | undefined>(undefined)
    const { productColumns, productData } = useGetProductsData({refreshData})

    return (
        <ContextRegister.Provider value={{
            contentOfRegister: contentOfRegister,
            setContentOfRegister: setContentOfRegister,
            refreshData: refreshData,
            setRefreshData: setRefreshData,
            dataForm: dataForm,
            handleInputChange: handleInputChange,
            isUpdate: isUpdate,
            setIsUpdate: setIsUpdate
        }}>
            <DefaultLayout title="Tabla de productos">
                <OptionsComponent title='Productos' columns={productColumns} data={productData} canCreate={true} canExportAsCSV={true} subtitle='Producto' onOpen={onOpen} />
                <TableComponent data={productData ?? []} columns={productColumns} onOpen={onOpen} />
                <ModalComponent isOpen={isOpen} onClose={onClose} onOpen={onOpen} text='producto' urlPostAndPut={urlPostAndPut} size='lg' _dataObject={_dataObject}>
                    <ModalRegister/>
                </ModalComponent>
            </DefaultLayout>
        </ContextRegister.Provider>
    )
}

export default TablePage

