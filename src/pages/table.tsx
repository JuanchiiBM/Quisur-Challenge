import DefaultLayout from '@/components/layout/main'
import TableComponent from '@/components/table'
import OptionsComponent from '@/components/options'
import ModalComponent from '@/components/modal'
import ModalRegister from '@/components/table/modalRegister'
import { personColumns, personData } from '@/config/data'
import { ContextRegister } from '@/utils/context/useContextRegister'
import { useDisclosure } from '@heroui/react'
import { PersonProps } from '@/types/personProps'
import { useState } from 'react'

const TablePage = () => {
    const {isOpen, onOpen, onClose} = useDisclosure()
    const [contentTable, setContentTable] = useState<PersonProps | undefined>(undefined)

    return (
        <ContextRegister.Provider value={{
            contentTable: contentTable,
            setContentTable: setContentTable
        }}>
            <DefaultLayout title="Tabla de ejemplo">
                <OptionsComponent title='Titulo' columns={personColumns} data={personData} canCreate={true} canExportAsCSV={true} subtitle='ejemplo' onOpen={onOpen} />
                <TableComponent data={personData} columns={personColumns} onOpen={onOpen} />
                <ModalComponent isOpen={isOpen} onClose={onClose} onOpen={onOpen} text='Ejemplo' urlPost='' size='lg' _dataObject={undefined} oldRegister={undefined}>
                    <ModalRegister/>
                </ModalComponent>
            </DefaultLayout>
        </ContextRegister.Provider>
    )
}

export default TablePage

