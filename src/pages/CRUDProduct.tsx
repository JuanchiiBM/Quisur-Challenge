import DefaultLayout from '@/components/layout/main'
import TableComponent from '@/components/table'
import OptionsComponent from '@/components/options'
import ModalComponent from '@/components/modal'
import ModalRegister from '@/components/CRUDProduct/modalRegister'
import { ContextRegister } from '@/utils/context/useContextRegister'
import { useDisclosure } from '@heroui/react'
import { ProductProps } from '@/types/productProps'
import { useState } from 'react'
import useGetProductsData from '@/utils/hooks/CRUDProduct/useGetProductsData'
import useForm from '@/utils/hooks/CRUDProduct/useForm'
import useSetDataObject from '@/utils/hooks/CRUDProduct/useSetDataObject'
import useUpdate from '@/utils/hooks/CRUDProduct/useUpdate'

const urlPostAndPut = '/products'

const CRUDProduct = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [refreshData, setRefreshData] = useState<number>(0)
    const [contentOfRegister, setContentOfRegister] = useState<ProductProps | undefined>(undefined)
    const [isUpdate, setIsUpdate] = useState<boolean>(false)

    const { dataForm, setDataForm, handleInputChange } = useForm()
    const { _dataObject } = useSetDataObject({ dataForm })

    useUpdate({ setDataForm, contentOfRegister, isOpen })

    const { productColumns, productData } = useGetProductsData({refreshData})

    return (
        <ContextRegister.Provider value={{
            contentOfRegister: contentOfRegister,
            setContentOfRegister: setContentOfRegister,
            refreshData: refreshData,
            setRefreshData: setRefreshData,
            dataForm: dataForm,
            setDataForm: setDataForm,
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

export default CRUDProduct

