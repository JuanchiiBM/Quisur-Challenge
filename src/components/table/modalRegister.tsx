import { useContextRegister } from "@/utils/context/useContextRegister"
import { Input, Autocomplete, AutocompleteItem } from "@heroui/react"
import { useEffect } from "react"

const ModalRegister = () => {
    const { contentTable } = useContextRegister()
    useEffect(() => {
        console.log(contentTable)
    }, [contentTable])

    return (
        <section className="gap-4 flex flex-col">
            <Input
                label='Nombre'
                labelPlacement="outside"
                defaultValue={contentTable?.name}
            />

            <Input
                label='Mail'
                labelPlacement="outside"
                defaultValue={contentTable?.email}
            />

            <Input
                label='Ingreso'
                labelPlacement="outside"
                defaultValue={contentTable?.income}
            />

            <Autocomplete
                label='Curso'
                isClearable
                labelPlacement="outside"
            >
                <AutocompleteItem>asdasd</AutocompleteItem>
            </Autocomplete>

        </section>
    )
}

export default ModalRegister
