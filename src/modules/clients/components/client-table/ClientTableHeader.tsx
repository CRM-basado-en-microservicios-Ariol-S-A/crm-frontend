import { fullInputWrapper } from '@/lib'
import { Button, Input } from '@nextui-org/react'
import { PlusSignIcon, Search01Icon } from 'hugeicons-react'

export const ClientTableHeader = () => {

    return (
        <>
            <div className='mb-4'>
                <h1 className='text-2xl mb-2'>Listado de Contactos</h1>
                <p className='text-sm'>Gestiona tus clientes y encuentra nuevas oportunidades de venta</p>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex justify-between gap-3 items-end">
                    <Input
                        isClearable

                        classNames={fullInputWrapper}
                        placeholder="Buscar cliente"
                        size="md"
                        className='max-w-sm'
                        startContent={<Search01Icon className="text-default-300" />}
                    />
                    <div className="flex gap-3">
                        <Button
                            endContent={<PlusSignIcon size={18} />}
                            size="md"
                            color='primary'
                        >
                            Agregar Cliente
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}
