import { eachDayOfInterval, format } from "date-fns";
import { ProductProps } from "@/types/productProps";
import { CategoryProps } from "@/types/categoryProps";
import { useMemo } from "react";
import useSetData from "../useSetData";

const useSetLineContent = (date: { start: any; end: any }) => {
    const products = useSetData("/products");
    const categories = useSetData("/categories");

    const generateLineChartData = (
        products: ProductProps[],
        categories: CategoryProps[],
        start: Date,
        end: Date,
    ) => {
        const grouped: Record<string, Record<string, number>> = {};
        const colorMap: Record<string, string> = {};
        const days = eachDayOfInterval({ start, end });
        const xDates = days.map((day: any) => format(day, "yyyy-MM-dd"));

        categories.forEach((cat) => {
            colorMap[cat.name] = cat.color;
            grouped[cat.name] = {};
            xDates.forEach((date: any) => {
                grouped[cat.name][date] = 0;
            });
        });

        products.forEach((prod) => {
            const date = format(new Date(prod.acquisitionDate), "yyyy-MM-dd");
            const category = prod.categoryName;
            const price = Number(prod.totalPrice) || 0;

            if (grouped[category] && grouped[category][date] !== undefined) {
                grouped[category][date] += price;
            }
        });

        const series = Object.keys(grouped).map((category) => ({
            name: category,
            data: xDates.map((date: any) => grouped[category][date]),
        }));
        console.log(series)

        const colors = Object.keys(grouped).map((category) =>
            colorMap[category] || "#888"
        );

        return { series, colors, categories: xDates };
    };

    const contentLineChart = useMemo(() => {
        if (!products || !categories) {
            return { series: [], colors: [], categories: [] };
          }          
        return generateLineChartData(
            products,
            categories,
            new Date(date.start.toString().slice(0, 16)),
            new Date(date.end.toString().slice(0, 16)),
        );
    }, [products, categories, date]);

    return contentLineChart
};

export default useSetLineContent;
