import { Spinner } from "@heroui/react"

export const SpinnerComponent = ({text}: {text?: string}) => {
  return (
    <div className='bg-default-500/[0.5] fixed top-0 left-0 w-full h-full flex justify-center align-center z-[60]'>
      <div className='flex flex-col justify-center items-center'>
        <Spinner color='white' />
        <span className='text-white'>{text ? text : 'Cargando...'}</span>
      </div>
    </div>
  )
}

export const SpinnerForTables = () => {
    return (
        <div className="w-full h-full bg-background-200 flex justify-around p-5 rounded-lg shadow-md">
            <div className="w-[80%] bg-background flex justify-around rounded-lg shadow-md">
                <Spinner color="current" label="Cargando datos de la tabla" />
            </div>
        </div>
    );
};