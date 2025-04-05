

import ReactApexChart, { Props } from "react-apexcharts";
import { useEffect } from "react";
import { useGlobalContext } from "@/utils/context/useGlobalContext";

type lineChartContent = {
    series: { name: string; data: number[]; }[];
    colors: Array<string>
    categories: string[];
}

export const LineChart = ({ content }: { content: lineChartContent }) => {
    const { theme } = useGlobalContext()

    useEffect(() => {console.log(theme)}, [theme])

    const labelsColor = theme == 'light' ? 'black' : 'white'

    const state: {
        series: Props["series"];
        options: Props["options"];
    } = {
        series: content.series,
        options: {
            chart: {
                height: 328,
                type: 'line',
                zoom: {
                    enabled: false
                },
                dropShadow: {
                    enabled: true,
                    top: 6,
                    left: 2,
                    blur: 4,
                    opacity: theme == 'dark' ? 1 : 0.4,
                },
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
            stroke: {
                curve: 'smooth',
                width: 2
            },

            markers: {
                size: 6,
                strokeWidth: 0,
                hover: {
                    size: 9
                }
            },
            grid: {
                show: true,
                padding: {
                    bottom: 0
                }
            },
            xaxis: {
                categories: content.categories,
                type: 'category',
                labels: {
                    formatter: (value) => {
                        const timestamp = new Date(value);
                        if (isNaN(timestamp.getTime())) return "";
                        return new Intl.DateTimeFormat("es-ES", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                        }).format(timestamp);
                    },
                    show: false,
                    style: {
                        colors: labelsColor
                    }
                }
            },
            yaxis: {
                labels: {
                    style: {
                        colors: labelsColor
                    }
                }
            },
            colors: content.colors,
            legend: {
                position: 'top', // Posición de la leyenda
                horizontalAlign: 'left', // Alineación horizontal
                markers: {
                    width: 12, // Tamaño de los marcadores de color
                    height: 12,
                },
                itemMargin: {
                    horizontal: 10, // Margen horizontal entre los elementos de la leyenda
                    vertical: 5, // Margen vertical
                },
                onItemClick: {
                    toggleDataSeries: true, // Permite ocultar/mostrar series al hacer clic en la leyenda
                },
                onItemHover: {
                    highlightDataSeries: true, // Resalta la serie correspondiente al pasar el mouse por encima
                },
                labels: {
                    colors: labelsColor, // Color del texto en la leyenda, dinámico según el tema
                },
            },
            tooltip: {
                theme: theme,
                x: {
                    format: 'dd/MM/yy'
                }
            }
        }
    }

    return (
        <div style={{ display: "flex", alignItems: "center" }}>
            <div id="chart" className="w-full overflow-hidden">
                <ReactApexChart options={state.options} series={state.series} type="line" />
            </div>
        </div>
    );
}
