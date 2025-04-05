import { useMemo } from "react";
import useSetData from "../useSetData";
import { CategoryProps } from "@/types/categoryProps";
import { ProductProps } from "@/types/productProps";

const useSetDonutContent = (date: { start: any; end: any }) => {
    const products = useSetData("/products");
    const categories = useSetData("/categories");

    const groupProductsByCategory = (products: ProductProps[], start: Date, end: Date) => {
        const grouped = new Map<string, number>();
        
        // Lo ideal sería VOLVER a hacer una petición al back con los parametros de fecha y no formatearlo
        // de esa manera no recibiría muchisimos registros si no los requeridos que se vayan a mostrar.
        products.forEach((product) => {
            const productDate = new Date(product.acquisitionDate);
            if (productDate < new Date(start) || productDate > new Date(end)) return;
    
            const category = product.categoryName;
            const quantity = Number(product.quantity) || 0;
            grouped.set(category, (grouped.get(category) || 0) + quantity);
        });
    
        return grouped;
    };
    const getCategoryColorMap = (categories: CategoryProps[]) => {
        const colorMap = new Map<string, string>();

        categories.forEach((category) => {
            if (category.name && category.color) {
                colorMap.set(category.name, category.color);
            }
        });

        return colorMap;
    };

    const buildDonutChartData = (
        grouped: Map<string, number>,
        colorMap: Map<string, string>,
    ) => {
        const labels = Array.from(grouped.keys());
        const series = Array.from(grouped.values());
        const colors = labels.map((label) => colorMap.get(label) || "#888");

        return { labels, series, colors };
    };

    const contentDonutChart = useMemo(() => {
        if (!products || !categories) {
            return { labels: [], series: [], colors: [] };
        }

        const grouped = groupProductsByCategory(products, date.start.toString().slice(0, 16), date.end.toString().slice(0, 16));
        const colorMap = getCategoryColorMap(categories);
        return buildDonutChartData(grouped, colorMap);
    }, [products, categories, date]);

    return contentDonutChart;
};

export default useSetDonutContent;
