import DefaultLayout from '@/components/layout/main'
import TableComponent from '@/components/table'
import OptionsComponent from '@/components/options'
import { personColumns, personData } from '@/config/data'
import { ContextRegister } from '@/utils/context/useContextRegister'

const TablePage = () => {
    return (
        <ContextRegister.Provider value={{
            contentTable: personData,
            setContentTable: () => {}
        }}>
            <DefaultLayout title="Tabla de ejemplo">
                <OptionsComponent title='Titulo' canCreate={true} canExportAsCSV={true} subtitle='ejemplo' />
                <TableComponent data={personData} columns={personColumns} />
            </DefaultLayout>
        </ContextRegister.Provider>
    )
}

export default TablePage

