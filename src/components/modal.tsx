import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@heroui/react"
import { createPortal } from 'react-dom'
import { useContextRegister } from '@/utils/context/useContextRegister'
import { ModalProps } from '@/types/modalProps'
import { usePost } from '@/utils/hooks/usePost'

const ModalComponent: React.FC<ModalProps> = ({children, isOpen, onClose, _dataObject, urlPostAndPut, text, size }) => {
    const { contentOfRegister }: { contentOfRegister: any} = useContextRegister()
    const { cargarIngreso } = usePost({ onClose, _dataObject, urlPostAndPut, text })

    return createPortal(
        <Modal isDismissable={false} backdrop='blur' size={size} className='bg-background-100' isOpen={isOpen} onClose={onClose}>
            <ModalContent>
                {(onClose: any) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">{ contentOfRegister ? `Editar ${text}` : `Cargar ${text}`}</ModalHeader>
                        <ModalBody className='flex flex-row justify-center gap-0'>
                            <form id='register-charge' onSubmit={(e) => {cargarIngreso(e)}} className='w-full flex flex-col justify-evenly'>
                                {children}
                            </form>
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Cerrar
                            </Button>
                            <Button color="primary" type='submit' form='register-charge'>
                                Guardar
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>, document.body
    )
}

export default ModalComponent