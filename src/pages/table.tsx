import DefaultLayout from '@/components/layout/main'
import Table from '@/components/table'
import { personColumns, personData } from '@/types/personTable'

const TablePage = () => {
    return (
        <DefaultLayout title="Tabla de ejemplo">
            <section className="p-4">
                <Table data={personData} columns={personColumns} />
            </section>
        </DefaultLayout>
    )
}

export default TablePage

