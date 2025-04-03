import {
    useReactTable,
    getCoreRowModel,
    getFilteredRowModel,
    getSortedRowModel,
    getPaginationRowModel,
    flexRender,
} from '@tanstack/react-table'
import { Pagination } from '@heroui/react'
import { useState } from 'react'

const Table = ({ data, columns }: any) => {
    const [globalFilter, setGlobalFilter] = useState('')

    const table = useReactTable({
        data,
        columns,
        state: {
            globalFilter,
        },
        onGlobalFilterChange: setGlobalFilter,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        initialState: {
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
                    className='transition-background rounded-lg p-2 focus-visible:outline-none focus:bg-background-100 bg-background-200 shadow-lg'
                />

                {/* Selector de registros por página */}
                <div className="flex items-center gap-2">
                    <span>Mostrar</span>
                    <select
                        value={table.getState().pagination.pageSize}
                        onChange={(e) => table.setPageSize(Number(e.target.value))}
                        className="rounded-lg p-2 focus:bg-background-100 bg-background-200 transition-background focus-visible:outline-none"
                    >
                        {[5, 10, 15, 20, 50].map(size => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                    <span>registros</span>
                </div>
            </div>

            {/* Tabla */}
            <div className="overflow-y-auto h-[28rem] bg-background-100 rounded-lg">
                <table className="min-w-full rounded-lg overflow-hidden shadow-lg">
                    <thead className="bg-background-100 border-b-1 border-b-default-400">
                        {table.getHeaderGroups().map(headerGroup => (
                            <tr key={headerGroup.id}>
                                {headerGroup.headers.map(header => (
                                    <th
                                        key={header.id}
                                        onClick={header.column.getToggleSortingHandler()}
                                        className="p-2 cursor-pointer text-left"
                                    >
                                        {flexRender(header.column.columnDef.header, header.getContext())}
                                        {header.column.getIsSorted() === 'asc'
                                            ? ' 🔼'
                                            : header.column.getIsSorted() === 'desc'
                                                ? ' 🔽'
                                                : ''}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody>
                        {table.getRowModel().rows.map((row, index) => (
                            <tr
                                key={row.id}
                                className={index % 2 === 0 ? 'bg-background-200' : 'bg-background-100'}
                            >
                                {row.getVisibleCells().map(cell => (
                                    <td key={cell.id} className="p-2">
                                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Paginación con números */}
            <div className="flex items-center justify-center gap-2 mt-4 flex-wrap">
                <Pagination
                    onChange={(e) => { console.log(e); table.setPageIndex(e - 1) }}
                    initialPage={1}
                    total={table.getPageCount()}
                >
                </Pagination>
            </div>
        </section>
    )
}

export default Table
