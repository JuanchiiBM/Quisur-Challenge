import DefaultLayout from '@/components/layout/main'
import { ContextRegister } from '@/utils/context/useContextRegister'
import { ProductProps } from '@/types/productProps'
import { useState } from 'react'

const ViewPage = () => {
    const [contentOfRegister, setContentOfRegister] = useState<ProductProps | undefined>(undefined)

    return (
        <ContextRegister.Provider value={{
            contentOfRegister: contentOfRegister,
            setContentOfRegister: setContentOfRegister
        }}>
            <DefaultLayout title="Vista de ejemplo">
                <p>asd</p>
            </DefaultLayout>
        </ContextRegister.Provider>
    )
}

export default ViewPage

