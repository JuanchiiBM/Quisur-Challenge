import { OptionsProps } from "@/types/optionsProps"
import { Button } from "@heroui/react"
import { Icon } from "@iconify/react"
import { FC } from "react"

const OptionsComponent: FC<OptionsProps> = ({ title, canCreate, canExportAsCSV, subtitle}) => {
    return (
        <section className='bg-background-100 flex justify-between items-center py-4 px-8 w-full rounded-lg shadow-lg mb-8'>
            <h1 className="text-xl">{title}</h1>
            <div>
                {canExportAsCSV && (
                    <Button startContent={<Icon icon="line-md:download-loop" width={20} height={20}/>} 
                    isIconOnly
                    title="Exportar como CSV"
                    className="bg-primary mr-4" />
                )}
                {canCreate && (
                    <Button startContent={<Icon icon="line-md:plus" className="p-0 m-0" width="20" height="20" />}
                    color="primary"
                    title="Crear un elemento para la tabla"
                    > Crear {subtitle}</Button>
                )}
            </div>
        </section>
    )
}

export default OptionsComponent
