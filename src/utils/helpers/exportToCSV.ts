type ExportProps = {
    columns: any[] | undefined;
    rows: any[] | undefined;
};

const exportToCSV = (
    columns: ExportProps["columns"],
    rows: ExportProps["rows"],
) => {
    if (columns && rows) {
        console.log(rows, columns)
        const headers = columns
            .filter((col) => col.accessorKey)
            .map((col) => col.header);

        const csvRows = [
            headers.join(","),
            ...rows.map((row) =>
                columns
                    .filter((col) => col.accessorKey)
                    .map((col) => {
                        const val = row[col.accessorKey]
                        return typeof val === "string"
                            ? `"${val.replace(/"/g, '""')}"`
                            : val;
                    })
                    .join(",")
            ),
        ];

        const blob = new Blob(['\uFEFF' + csvRows.join('\n')], { type: 'text/csv;charset=utf-8;' })
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.setAttribute("hidden", "");
        a.setAttribute("href", url);
        a.setAttribute("download", "tabla.csv");
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    } else {
        throw new Error("No hay columnas o filas para exportar.")
    }
};

export default exportToCSV;
