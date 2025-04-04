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

const TablePage = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [refreshData, setRefreshData] = useState<number>(0)

    const [contentOfRegister, setContentOfRegister] = useState<ProductProps | undefined>(undefined)
    const { productColumns, productData } = useGetProductsData({refreshData})

    return (
        <ContextRegister.Provider value={{
            contentOfRegister: contentOfRegister,
            setContentOfRegister: setContentOfRegister,
            refreshData: refreshData,
            setRefreshData: setRefreshData,
        }}>
            <DefaultLayout title="Tabla de ejemplo">
                <OptionsComponent title='Titulo' columns={productColumns} data={productData} canCreate={true} canExportAsCSV={true} subtitle='ejemplo' onOpen={onOpen} />
                <TableComponent data={productData ?? []} columns={productColumns} onOpen={onOpen} />
                <ModalComponent isOpen={isOpen} onClose={onClose} onOpen={onOpen} text='Ejemplo' urlPost='' size='lg' _dataObject={undefined} oldRegister={undefined}>
                    <ModalRegister/>
                </ModalComponent>
            </DefaultLayout>
        </ContextRegister.Provider>
    )
}

export default TablePage

