import { FormEvent } from "react"
import { SuccessAlert, ErrorAlert } from "@/components/sweetAlert";
import { POSTFunction, PUTFunction } from "../helpers/fetchFunctions";
import { useContextRegister } from "../context/useContextRegister";
import { capitalizeFirstLetter } from "@/utils/helpers/capitalization";
import { useGlobalContext } from "../context/useGlobalContext";

interface UsePostProps {
    _dataObject: { [key: string]: any }
    onClose: (() => void) | undefined
    urlPostAndPut: string
    text: string
}

export const usePost = ({ onClose, _dataObject, urlPostAndPut, text }: UsePostProps) => {
    const { isUpdate, setRefreshData } = useContextRegister()
    const { setSpinner } = useGlobalContext()

    const cargarIngreso = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!isUpdate) {
            newRegister(_dataObject)
        } else {
            console.log(_dataObject)
            updateRegister(_dataObject)
        }

    }

    const newRegister = async (_dataObject: any) => {
        _dataObject.acquisitionDate = new Date()
        setSpinner(true)
        const response = await POSTFunction(`${urlPostAndPut}`, _dataObject)
        //Se añade un timeout para simular la tardanza del fetch
        setTimeout(() => {
            setSpinner(false)
            if (response) {
                SuccessAlert(`${capitalizeFirstLetter(text)} Creado`, '', 'Ok', () => {
                    setRefreshData((prev) => prev = prev + 1)
                        if (onClose)
                        onClose()
                })
            } else if (response.error) {
                ErrorAlert('Error', response.error, 'Ok')
            }
        }, 1000)
    }

    const updateRegister = async (_dataObject: any) => {
        setSpinner(true)
        const response = await PUTFunction(`${urlPostAndPut}/${_dataObject.id}`, _dataObject)
        //Se añade un timeout para simular la tardanza del fetch
        setTimeout(() => {
            setSpinner(false)
            if (response) {                
                SuccessAlert(`${capitalizeFirstLetter(text)} Actualizado`, '', 'Ok', () => {
                    setRefreshData((prev) => prev = prev + 1)
                    if (onClose)
                        onClose()
                })
            } else if (response.error) {
                ErrorAlert('Error', response.error, 'Ok')
            }
        }, 1000)
    }

    return { cargarIngreso }
}