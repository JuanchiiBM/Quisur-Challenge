import { PersonProps } from "@/types/personProps"
import { ColumnDef } from "@tanstack/table-core"

const personData: PersonProps[] = [
    { id: 1, name: 'Juan Pérez', age: 28, email: 'juan@example.com' },
    { id: 2, name: 'Ana López', age: 34, email: 'ana@example.com' },
    { id: 3, name: 'Carlos Ruiz', age: 22, email: 'carlos@example.com' },
    { id: 4, name: 'María Gómez', age: 45, email: 'maria@example.com' },
    { id: 5, name: 'Pedro Sánchez', age: 19, email: 'pedro@example.com' },
    { id: 6, name: 'Lucía Díaz', age: 27, email: 'lucia@example.com' },
    { id: 7, name: 'Sofía Martínez', age: 31, email: 'sofia@example.com' },
    { id: 8, name: 'Miguel Torres', age: 40, email: 'miguel@example.com' },
    { id: 9, name: 'Laura Fernández', age: 25, email: 'laura@example.com' },
    { id: 10, name: 'Diego Castro', age: 33, email: 'diego@example.com' },
    { id: 11, name: 'Valeria Morales', age: 29, email: 'valeria@example.com' },
    { id: 12, name: 'Javier Ortiz', age: 38, email: 'javier@example.com' },
    { id: 13, name: 'Camila Herrera', age: 24, email: 'camila@example.com' },
    { id: 14, name: 'Andrés Vega', age: 36, email: 'andres@example.com' },
    { id: 15, name: 'Elena Navarro', age: 42, email: 'elena@example.com' },
    { id: 16, name: 'Manuel Rojas', age: 21, email: 'manuel@example.com' },
    { id: 17, name: 'Isabel Romero', age: 30, email: 'isabel@example.com' },
];

const personColumns: ColumnDef<PersonProps>[] = [
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