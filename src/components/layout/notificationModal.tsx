import React from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@heroui/react";
import { createPortal } from 'react-dom';
import { NotificationProps } from '@/types/notificationProps';

interface NotificationModalProps {
    notification: NotificationProps | null
    isModalOpen: boolean
    setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const NotificationModal: React.FC<NotificationModalProps> = ({notification, isModalOpen, setIsModalOpen}) => {    
    return createPortal(
        <Modal size='sm' isOpen={isModalOpen} onClose={() => { setIsModalOpen(false) }}>
            <ModalContent>
                <ModalHeader>{notification && notification.title}</ModalHeader>
                <ModalBody>
                    {notification && notification.message}
                </ModalBody>
                <ModalFooter>
                    <Button variant="ghost" onPress={() => setIsModalOpen(false)}>Cerrar</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>, document.body
    )
}

export default NotificationModal