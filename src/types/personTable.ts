import { ColumnDef } from "@tanstack/table-core"

type Person = {
    id: number
    name: string
    age: number
    email: string
}

const personData: Person[] = [
    { id: 1, name: 'Juan Pérez', age: 28, email: 'juan@example.com' },
    { id: 2, name: 'Ana López', age: 34, email: 'ana@example.com' },
    { id: 3, name: 'Carlos Ruiz', age: 22, email: 'carlos@example.com' },
    { id: 4, name: 'María Gómez', age: 45, email: 'maria@example.com' },
    { id: 5, name: 'Pedro Sánchez', age: 19, email: 'pedro@example.com' },
    { id: 6, name: 'Lucía Díaz', age: 27, email: 'lucia@example.com' },
]

const personColumns: ColumnDef<Person>[] = [
    {
        accessorKey: 'id',
        header: 'ID',
        cell: info => info.getValue(),
    },
    {
        accessorKey: 'name',
        header: 'Nombre',
        cell: info => info.getValue(),
    },
    {
        accessorKey: 'age',
        header: 'Edad',
        cell: info => info.getValue(),
    },
    {
        accessorKey: 'email',
        header: 'Email',
        cell: info => info.getValue(),
    },
]

export {personColumns, personData}