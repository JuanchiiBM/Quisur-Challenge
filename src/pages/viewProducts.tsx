import DefaultLayout from '@/components/layout/main'
import OptionsComponent from '@/components/options'
import { DonutChart } from '@/components/charts/donutChart'
import { parseAbsoluteToLocal } from "@internationalized/date";
import { useState } from 'react';
import useSetDonutContent from '@/utils/hooks/viewProducts/useSetDonutContent'
import { LineChart } from '@/components/charts/lineChart';
import useSetLineContent from '@/utils/hooks/viewProducts/useSetLineContent';

const viewProducts = () => {
    const [date, setDate] = useState({
        start: parseAbsoluteToLocal(new Date(Date.UTC(2025, 0, 1, 13)).toISOString()),
        end: parseAbsoluteToLocal(new Date().toISOString()),
    });

    const contentDonutChart = useSetDonutContent(date)
    const contentLineChart = useSetLineContent(date)

    return (
        <DefaultLayout title="Vista de productos">
            <OptionsComponent title='Opciones de Vista' canChangeDate={true} date={date} setDate={setDate} />
            <div className='flex gap-4'>
                <div className='w-[40%] rounded-lg shadow-lg bg-background-100 overflow-hidden'>
                    <h1 className='p-8 text-xl'>Cantidad por categorías</h1>
                    <DonutChart content={contentDonutChart} />
                </div>
                <div className='w-[60%] rounded-lg shadow-lg bg-background-100 overflow-hidden'>
                    <h1 className='p-8 text-xl'>Precio total por categorías</h1>
                    <LineChart content={contentLineChart} />
                </div>
            </div>

        </DefaultLayout>
    )
}

export default viewProducts

