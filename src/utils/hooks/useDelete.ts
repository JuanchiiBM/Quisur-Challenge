import React from 'react'
import { DELETEFunction } from '../helpers/fetchFunctions'
import { ErrorAlert, SuccessAlert } from '@/components/sweetAlert'
import { useContextRegister } from '../context/useContextRegister'
import { useGlobalContext } from '../context/useGlobalContext'

const useDelete = () => {
    const { setRefreshData } = useContextRegister()
    const { setSpinner } = useGlobalContext()

    const deleteRegister = async (endpoint: string, id: string | number) => {
        try {
            setSpinner(true)
            const response = await DELETEFunction(`${endpoint}/${id}`)
            //Utilizamos este timeout para simular un retraso en la peticion del fetch
            setTimeout(() => {
                setSpinner(false)
                if (response) {
                    SuccessAlert('Registro borrado', 'El registro a sido borrado exitosamente', undefined, () => {
                        setRefreshData((prev) => prev=prev+1)
                    })
                } else if (response.error) {
                    throw new Error(response.error)
                }
            }, 1000)
        } catch (error: any) {
            ErrorAlert('Error', error)
        }
    }

    return deleteRegister
}

export default useDelete
