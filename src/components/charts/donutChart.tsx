import { useGlobalContext } from "@/utils/context/useGlobalContext";
import React from "react";
import ReactApexChart, { Props } from "react-apexcharts";

const legendColor = getComputedStyle(document.documentElement).getPropertyValue('--heroui-default-200').trim();

type donutChartContent = {
    series: Array<number>
    labels: Array<string>
    colors: Array<string>
}

let donutChart: any

export const DonutChart = ({ content }: { content: donutChartContent }) => {
    const { theme } = useGlobalContext()

    const state: {
        series: Props["series"];
        options: Props["options"];
    } = {
        series: content.series,
        options: {
            labels: content.labels, // Nombres de las series
            colors: content.colors, // Colores de las series
            chart: {
                type: "donut",
                defaultLocale: 'es',
                locales: [{
                    name: 'es',
                    options: {
                        toolbar: {
                            exportToSVG: 'Descargar SVG',
                            exportToPNG: 'Descargar PNG',
                            exportToCSV: 'Descargar CSV',
                        }
                    }
                }]
            },
            dataLabels: {
                enabled: false,
            },
            legend: {
                onItemClick: {
                    toggleDataSeries: false,
                },
                show: false,
                labels: {
                    colors: legendColor, // Color del texto de la leyenda
                    useSeriesColors: false, // Usa los colores de las series para el texto
                },
            },
            plotOptions: {
                pie: {
                    expandOnClick: false,
                },
            },
            tooltip: {
                theme: theme,
            },
            stroke: {
                width: 0, // Elimina el borde blanco
            },
            responsive: [
                {
                    breakpoint: 480,
                    options: {
                        chart: {
                            height: 200,
                        },
                        legend: {
                            position: "bottom",
                        },
                    },
                },
            ],
        },
    }

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);
    // Personaliza el estilo directamente en CSS
    React.useEffect(() => {
        setTimeout(() => {
            donutChart = document.getElementById("chartDonut");
            const parentElement = donutChart;
            const legendElement = parentElement?.firstElementChild?.firstElementChild?.firstElementChild?.firstElementChild?.firstElementChild
            if (legendElement) {
                legendElement.setAttribute(
                    "style",
                    `display: flex; flex-direction: column; 
                align-items: center; justify-content: space-evenly; 
                height: auto; position: absolute; 
                left: auto; top: -10px;
                right: 5px;`
                );
            }
        }, 500)
    }, [windowWidth, theme]);

    React.useEffect(() => {
        window.addEventListener("resize", () => setWindowWidth(window.innerWidth));
    }, [])

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <div id="chartDonut" className="w-full">
                <ReactApexChart options={state.options} series={state.series} type="donut" />
            </div>
        </div>
    );
};
