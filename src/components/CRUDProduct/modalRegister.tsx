import { CategoryProps } from "@/types/categoryProps"
import { ProductProps } from "@/types/productProps"
import { useContextRegister } from "@/utils/context/useContextRegister"
import useSetData from "@/utils/hooks/useSetData"
import { Input, Autocomplete, AutocompleteItem } from "@heroui/react"

const ModalRegister = () => {
    const { contentOfRegister, handleInputChange }: {contentOfRegister: ProductProps, handleInputChange: any} = useContextRegister()
    const categorys: CategoryProps[] = useSetData('/categories')

    return (
        <section className="gap-4 flex flex-col">
            <div className="gap-4 flex">
                <Input
                    label='Producto'
                    labelPlacement="outside"
                    onChange={(e: any) => handleInputChange('name', e.target.value)} 
                    required
                    defaultValue={contentOfRegister?.name}
                />
                {!categorys ?
                    <Input placeholder="Cargando..." label='Categoría' labelPlacement="outside" disabled isDisabled /> :
                    <Autocomplete
                        label='Categoría'
                        isClearable
                        isRequired
                        labelPlacement="outside"
                        defaultSelectedKey={`${contentOfRegister?.categoryId}_${contentOfRegister?.categoryName}`}
                        listboxProps={{
                            emptyContent: "Categoría inexistente.",
                        }}
                        onSelectionChange={(e: any) => {handleInputChange('categoryId', parseInt(e.split('_')[0])); handleInputChange('categoryName', e.split('_')[1])}} 
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
                    required
                    type="number"
                    onChange={(e: any) => handleInputChange('quantity', parseInt(e.target.value))} 
                    defaultValue={contentOfRegister?.quantity.toString()}
                />
                <Input
                    label='Precio Total'
                    labelPlacement="outside"
                    required
                    type="number"
                    onChange={(e: any) => handleInputChange('totalPrice', parseFloat(e.target.value))} 
                    defaultValue={contentOfRegister?.totalPrice.toString()}
                />
            </div>
            <Input
                label='Proveedor'
                labelPlacement="outside"
                required
                onChange={(e: any) => handleInputChange('supplier', e.target.value)} 
                defaultValue={contentOfRegister?.supplier}
            >
            </Input>
        </section>
    )
}

export default ModalRegister
