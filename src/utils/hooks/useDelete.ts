import React from 'react'
import { DELETEFunction } from '../helpers/fetchFunctions'
import { ErrorAlert, SuccessAlert } from '@/components/sweetAlert'
import { useContextRegister } from '../context/useContextRegister'

const useDelete = () => {
    const { setRefreshData } = useContextRegister()

    const deleteRegister = async (endpoint: string, id: string | number) => {
        try {
            console.log('entra2')
            const response = await DELETEFunction(`${endpoint}/${id}`)
            if (response) {
                SuccessAlert('Registro borrado', 'El registro a sido borrado exitosamente', undefined, () => {
                    setRefreshData((prev) => prev=prev+1)
                })
            } else if (response.error) {
                throw new Error(response.error)
            }
        } catch (error: any) {
            ErrorAlert('Error', error)
        }
    }

    return deleteRegister
}

export default useDelete
