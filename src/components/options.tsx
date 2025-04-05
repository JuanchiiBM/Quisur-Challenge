import { OptionsProps } from "@/types/optionsProps"
import { useContextRegister } from "@/utils/context/useContextRegister"
import { Button, DateRangePicker } from "@heroui/react"
import { Icon } from "@iconify/react"
import exportToCSV from "@/utils/helpers/exportToCSV"
import { FC } from "react"
import { I18nProvider } from "@react-aria/i18n";

const OptionsComponent: FC<OptionsProps> = ({ title, canCreate = false, canExportAsCSV = false, canChangeDate = false, subtitle, columns, data, onOpen, date, setDate }) => {
    const { setContentOfRegister, setDataForm, setIsUpdate } = useContextRegister()

    return (
        <section className='bg-background-100 flex justify-between items-center py-4 px-8 w-full rounded-lg shadow-lg mb-8'>
            <h1 className="text-xl">{title}</h1>
            <div>
                {canChangeDate && setDate && date && (
                    <I18nProvider locale="es">
                        <DateRangePicker 
                            label="Fecha de adquisición" 
                            value={date} 
                            granularity="day"
                            onChange={(value) => {
                                if (value) {
                                    setDate({ start: value.start, end: value.end });
                                }
                            }} 
                        />
                    </I18nProvider>
                )}
                {canExportAsCSV && (
                    <Button startContent={<Icon icon="line-md:download-loop" width={20} height={20} />}
                        isIconOnly
                        title="Exportar como CSV"
                        onPress={() => exportToCSV(columns, data)}
                        className="bg-primary mr-4 text-white" />
                )}
                {canCreate && (
                    <Button startContent={<Icon icon="line-md:plus" className="p-0 m-0" width="20" height="20" />}
                        color="primary"
                        onPress={() => { onOpen && onOpen(); setContentOfRegister(undefined); setDataForm(undefined); setIsUpdate(false) }}
                        title="Crear un elemento para la tabla"
                    > Crear {subtitle}</Button>
                )}
            </div>
        </section>
    )
}

export default OptionsComponent
