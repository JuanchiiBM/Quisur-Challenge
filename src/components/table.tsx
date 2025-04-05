import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    getPaginationRowModel,
    flexRender,
} from '@tanstack/react-table'
import { Button, Pagination, Select, SelectItem, } from '@heroui/react'
import { useState } from 'react'
import { Icon } from '@iconify/react'
import { QuestionAlert } from './sweetAlert'
import { useContextRegister } from '@/utils/context/useContextRegister'
import { SpinnerForTables } from './spinners'
import useDelete from '@/utils/hooks/useDelete'

const tableSize = ['5', '10', '15', '20', '50']

const Table = ({ data, columns, onOpen }: any) => {
    const [globalFilter, setGlobalFilter] = useState('')
    const deleteRegister = useDelete()
    const { setContentOfRegister, setIsUpdate } = useContextRegister()

    const table = useReactTable({
        data,
        columns: [...columns, {
            id: 'actions',
            header: 'Acciones',
            cell: ({ row }) => {
                const original: any = row.original
                return (
                    <div className="flex justify-center gap-2">
                        <Button isIconOnly className="bg-warning text-white rounded text-sm h-6"
                            startContent={<Icon icon="flowbite:edit-outline" width="20" height="20" />}
                            onPress={() => { onOpen(); setContentOfRegister(original); setIsUpdate(true) }}
                            title='Editar registro' />

                        <Button isIconOnly className="bg-danger text-white rounded text-sm h-6"
                            startContent={<Icon icon="famicons:trash" width="20" height="20" />}
                            onPress={() => QuestionAlert('¿Eliminar registro?', '¿Está seguro de eliminar este registro?', 'Eliminar', () => {
                                console.log('entra1')
                                deleteRegister('/products', original.id)
                            })}
                            title='Eliminar registro' />
                    </div>
                )
            },
        },],
        state: {
            globalFilter,
        },
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
            sorting: [
                {
                    id: "id",   
                    desc: true
                }
            ],
            pagination: {
                pageIndex: 0,
                pageSize: 10,
            },
        },
    })

    return (
        <section>
            {/* Buscador y selector */}
            <div className="mb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <input
                    type="text"
                    placeholder="Buscar..."
                    value={globalFilter ?? ''}
                    onChange={e => setGlobalFilter(e.target.value)}
                    className='transition-background rounded-lg p-2 focus-visible:outline-none focus:bg-background-200 bg-background-100 shadow-md'
                />

                {/* Selector de registros por página */}
                <div className="flex items-center gap-2">
                    <span>Mostrar</span>
                    <Select
                        onChange={(e) => { table.setPageSize(Number(e.target.value)) }}
                        disallowEmptySelection
                        classNames={{
                            trigger: 'rounded-lg shadow-md p-2 group-hover:bg-background-200 bg-background-100 transition-background w-20 focus-visible:outline-none'
                        }}
                        defaultSelectedKeys={['10']}
                    >
                        {tableSize.map((tableSize) => (
                            <SelectItem key={tableSize}>{tableSize}</SelectItem>
                        ))}
                    </Select>
                    <span>registros</span>
                </div>
            </div>

            {/* Tabla */}
            <div className="overflow-y-auto h-[28rem] bg-background-100 rounded-lg shadow-lg">
                {data.length == 0 ? <SpinnerForTables /> :
                    <table className="min-w-full rounded-lg overflow-hidden">
                        <thead className="bg-background-100 border-b-1 border-b-default-400">
                            {table.getHeaderGroups().map(headerGroup => (
                                <tr key={headerGroup.id} className='w-full'>
                                    {headerGroup.headers.map(header => (
                                        <th
                                            key={header.id}
                                            onClick={header.column.getToggleSortingHandler()}
                                            className={`
                                        p-2 text-left items-center gap-2
                                        ${header.id === 'actions' ? 'text-center sticky right-0 bg-background-100 w-[150px] z-10' : ''}
                                      `}                                    >
                                            {flexRender(header.column.columnDef.header, header.getContext())}
                                            {header.column.getIsSorted() === 'asc'
                                                ? <Icon icon="solar:arrow-up-broken" className='ml-1 absolute inline-block' width="20" height="20" />
                                                : header.column.getIsSorted() === 'desc'
                                                    ? <Icon icon="solar:arrow-down-broken" className='ml-1 absolute inline-block' width="20" height="20" />
                                                    : ''}
                                        </th>
                                    ))}
                                </tr>
                            ))}
                        </thead>
                        <tbody>
                            {table.getPageCount() != 0 ?

                                table.getRowModel().rows.map((row, index) => (
                                    <tr
                                        key={row.id}
                                        className={index % 2 === 0 ? 'bg-background-200' : 'bg-background-100'}
                                    >
                                        {row.getVisibleCells().map(cell => (
                                            <td
                                                key={cell.id}
                                                className={`
                                      p-2 whitespace-nowrap
                                      ${cell.column.id === 'actions' ? 'sticky right-0 bg-background-100 w-[150px] z-10' : ''}
                                    `}
                                            >
                                                {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                            </td>
                                        ))}
                                    </tr>
                                )) :
                                <tr>
                                    <td colSpan={columns.length} className="text-center p-4">
                                        No se encontraron registros
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>}

            </div>

            {/* Paginación con números */}
            <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
                {table.getPageCount() != 0 &&
                    <Pagination
                        onChange={(e) => { table.setPageIndex(e - 1) }}
                        initialPage={1}
                        total={table.getPageCount()}
                    >
                    </Pagination>
                }
            </div>
        </section>
    )
}

export default Table
