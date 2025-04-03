export interface ModalProps {
    children: React.ReactNode
    text: string
    isOpen: boolean
    onClose: () => void
    onOpen: () => void
    _dataObject: any
    urlPost: string
    oldRegister: any
    size: "sm" | "md" | "lg" | "xl" | "2xl" | "xs" | "3xl" | "4xl" | "5xl" | "full" | undefined
}
