export interface OptionsProps {
    title: string
    subtitle?: string
    canCreate: boolean
    onOpen?: () => void
    columns?: any[]
    data?: any[]
    canExportAsCSV: boolean
}