import { useContextRegister } from "@/utils/context/useContextRegister"
import { Input, Autocomplete, AutocompleteItem } from "@heroui/react"
import { useEffect } from "react"

const ModalRegister = () => {
    const { contentOfRegister } = useContextRegister()
    useEffect(() => {
        console.log(contentOfRegister)
    }, [contentOfRegister])

    return (
        <section className="gap-4 flex flex-col">
            <Input
                label='Nombre'
                labelPlacement="outside"
                defaultValue={contentOfRegister?.name}
            />

            <Input
                label='Mail'
                labelPlacement="outside"
                defaultValue={contentOfRegister?.email}
            />

            <Input
                label='Ingreso'
                labelPlacement="outside"
                defaultValue={contentOfRegister?.income}
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
