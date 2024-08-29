"use client"
import { FormEvent } from 'react'

import { fullInputWrapper } from '@/lib'
import { Button, Input } from '@nextui-org/react'

export const NewBrandForm = () => {

    const handleSubmit = async ( e: FormEvent ) => {
        e.preventDefault();
        
        const { nombre, descripcion } = e.target as HTMLFormElement;

        

        
    }

    return (
        <form className='brand__form'>

                <h2>Registra una nueva marca</h2>
            <div className='flex md:flex-row items-center justify-between gap-4'>

                <Input
                    classNames={fullInputWrapper}
                    label="Nombre"
                    placeholder='Agrega un nombre'
                    size='sm'
                    isRequired
                />

                <Input
                    classNames={fullInputWrapper}
                    placeholder='Ingrese una pequeña descripción'
                    label="Descipcion"
                    size='sm'
                />
            </div>

            <Button
                color='primary'
                className='btn-gradient'
            >
                Registrar Marca
            </Button>
        </form>
    )
}
