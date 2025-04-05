import { ColumnDef } from "@tanstack/table-core";
import { ProductProps } from "@/types/productProps";
import useSetData from "@/utils/hooks/useSetData";
import { useEffect, useState } from "react";

const useGetProductsData = ({refreshData}: {refreshData: number}) => {
    const [productData, setProductData] = useState<ProductProps[]>([]);
    const value: ProductProps[] = useSetData("/products", refreshData);

    useEffect(() => {
        if (value) {
            setProductData([])
            //Añado esto para simular un retraso
            setTimeout(() => {
                setProductData(value);
            }, 1000);
        }
    }, [value, refreshData]);

    const productColumns: ColumnDef<ProductProps>[] = [
        {
            accessorKey: "id",
            header: "ID",
            cell: (info) => info.getValue(),
        },
        {
            accessorKey: "name",
            header: "Producto",
            cell: (info) => info.getValue(),
        },
        {
            accessorKey: "categoryName",
            header: "Categoría",
            cell: (info) => info.getValue(),
        },
        {
            accessorKey: "quantity",
            header: "Cantidad",
            cell: (info) => info.getValue(),
        },
        {
            accessorKey: "totalPrice",
            header: "Precio Total",
            cell: (info) => `$${info.getValue()}`,
        },
        {
            accessorKey: "supplier",
            header: "Proveedor",
            cell: (info) => info.getValue(),
        },
    ];

    return { productColumns, productData };
};

export default useGetProductsData;
