import { ReactNode } from "react"

export interface ModalProps {
    children: ReactNode
    text: string
    isOpen: boolean
    onClose: () => void
    onOpen: () => void
    _dataObject: any
    urlPostAndPut: string
    size: "sm" | "md" | "lg" | "xl" | "2xl" | "xs" | "3xl" | "4xl" | "5xl" | "full" | undefined
}
