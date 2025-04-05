import { CategoryProps } from "@/types/categoryProps"
import { useContextRegister } from "@/utils/context/useContextRegister"
import useSetData from "@/utils/hooks/useSetData"
import { Input, Autocomplete, AutocompleteItem } from "@heroui/react"

const ModalRegister = () => {
    const { contentOfRegister, handleInputChange } = useContextRegister()
    const categorys: CategoryProps[] = useSetData('/categories')

    return (
        <section className="gap-4 flex flex-col">
            <div className="gap-4 flex">
                <Input
                    label='Producto'
                    labelPlacement="outside"
                    onChange={(e: any) => handleInputChange('name', e.target.value)} 
                    defaultValue={contentOfRegister?.name}
                />
                {!categorys ?
                    <Input placeholder="Cargando..." label='Categoría' labelPlacement="outside" disabled isDisabled /> :
                    <Autocomplete
                        label='Categoría'
                        isClearable
                        labelPlacement="outside"
                        onSelectionChange={(e: any) => {handleInputChange('categoryId', e.split('_')[0]); handleInputChange('categoryName', e.split('_')[1])}} 
                    >
                        {categorys.map((category) => (
                            <AutocompleteItem key={`${category.id}_${category.name}`}>{category.name}</AutocompleteItem>
                        ))}
                    </Autocomplete>
                }

            </div>
            <div className="gap-4 flex">
                <Input
                    label='Cantidad'
                    labelPlacement="outside"
                    type="number"
                    onChange={(e: any) => handleInputChange('quantity', e.target.value)} 
                    defaultValue={contentOfRegister?.quantity}
                />
                <Input
                    label='Precio Total'
                    labelPlacement="outside"
                    type="number"
                    onChange={(e: any) => handleInputChange('totalPrice', e.target.value)} 
                    defaultValue={contentOfRegister?.totalPrice}
                />
            </div>
            {/*Llenar*/}
            <Input
                label='Proveedor'
                labelPlacement="outside"
                onChange={(e: any) => handleInputChange('supplier', e.target.value)} 
                defaultValue={contentOfRegister?.supplier}
            >
            </Input>
        </section>
    )
}

export default ModalRegister
