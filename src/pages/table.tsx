import DefaultLayout from '@/components/layout/main'
import TableComponent from '@/components/table'
import { personColumns, personData } from '@/types/personTable'

const TablePage = () => {
    return (
        <DefaultLayout title="Tabla de ejemplo">
            <section className="p-4">
                <TableComponent data={personData} columns={personColumns} />
            </section>
        </DefaultLayout>
    )
}

export default TablePage

