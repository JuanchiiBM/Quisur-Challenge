import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, Badge } from "@heroui/react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { NotificationProps } from "@/types/notificationProps";
import NotificationModal from "./notificationModal";
import { useCallback, useEffect, useState } from 'react'
import useSetData from "@/utils/hooks/useSetData";
import useWebSocket from "@/utils/hooks/useWebSocket";

const userId = 1;

const Notifications = () => {
    const [notifications, setNotifications] = useState<NotificationProps[]>([]);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const [selectedNotification, setSelectedNotification] = useState<NotificationProps | null>(null)

    const all = useSetData('/notifications');
    useEffect(() => {
        if (Array.isArray(all)) {
            setNotifications(all);
        }
    }, [all]);

    // 🎧 Escuchamos WebSocket
    useWebSocket(userId, (newNotification: NotificationProps) => {
        setNotifications((prev) => [newNotification, ...prev]);
    });


    const handleModal = useCallback((notification: NotificationProps) => {
        setSelectedNotification(notification)
        notification.saw = true
        setIsModalOpen(true)
      }, []);

    return (
        <div>
            <Dropdown>
                <DropdownTrigger>
                    <Button isIconOnly variant="light" className="">
                        {notifications.length && notifications.filter(notification => !notification.saw).length > 0 ? (
                            <Badge color="danger" content={notifications.filter(notification => !notification.saw).length}>
                                <Icon icon="bxs:bell" width={20} />
                            </Badge>) : (
                            <Icon icon="bxs:bell" width={20} />
                        )}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu className="max-h-40 overflow-y-auto" emptyContent="Sin notificaciones" aria-label="Static Actions">
                    {notifications.map((notification) => (
                        <DropdownItem className={notification.saw ? "text-default-400" : "bg-default-100"} onPress={() => handleModal(notification)} key={notification.id + '_' + notification.title}
                            endContent={!notification.saw ? <Icon icon="ic:twotone-circle" className="text-danger" width={20} /> : null}
                        >
                            {notification.title}
                        </DropdownItem>
                    ))}
                </DropdownMenu>
            </Dropdown>
            <NotificationModal notification={selectedNotification} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
        </div>
    )
}

export default Notifications
