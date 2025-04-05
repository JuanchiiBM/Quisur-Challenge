export interface OptionsProps {
    title: string
    subtitle?: string
    canCreate?: boolean
    canChangeDate?: boolean
    onOpen?: () => void
    columns?: any[]
    data?: any[]
    canExportAsCSV?: boolean
    date?: {
        start: any;
        end: any;
    }
    setDate?: React.Dispatch<React.SetStateAction<{
        start: any;
        end: any;
    }>>
}