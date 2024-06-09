import { Button, Input } from '@nextui-org/react'
import { Add01Icon, Add02Icon, PlusSignIcon, Search01Icon, Search02Icon } from 'hugeicons-react'
import React from 'react'

export const ClientTableHeader = () => {


    const inputWrapper = [
        "shadow-none",
        "bg-athens-gray",
        "rounded-md",
        "outline-none",
        "group-data-[focus=true]:bg-athens-gray",
    ]
    const label = "font-medium"

    return (
        <div className="flex flex-col gap-4">
            <div className="flex justify-between gap-3 items-end">
                <Input
                    isClearable
                    
                    classNames={{
                        inputWrapper,
                        label,
                    }}
                    placeholder="Buscar cliente"
                    size="md"
                    className='max-w-sm'
                    startContent={<Search01Icon className="text-default-300" />}
                />
                <div className="flex gap-3">
                    <Button
                        endContent={<PlusSignIcon size={18}/>}
                        size="md"
                        color='primary'
                    >
                        Agregar Cliente
                    </Button>
                </div>
            </div>
        </div>
    )
}
