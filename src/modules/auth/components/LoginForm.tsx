"use client"
import { useState } from 'react'

import { Input } from '@nextui-org/input'
import { Button } from '@nextui-org/button';
import { Checkbox, button } from '@nextui-org/react';
import { ViewIcon, ViewOffIcon } from '@/modules/shared';

export const LoginForm = () => {

    const inputWrapper = "shadow-none bg-white border border-gray-400 rounded outline-none";
    const label = "font-medium"

    const [showPassword, setShowPassword] = useState(false);

    return (
        <form className='w-full space-y-6'>
            <Input
                label="Correo electronico"
                size='sm'
                name='email'
                type='email'
                classNames={{
                    inputWrapper,
                    label
                }}
                variant='bordered'
            />

            <Input
                name='password'
                size='sm'
                label="Contraseña"
                classNames={{
                    inputWrapper,
                    label
                }}
                variant='bordered'
                type={ showPassword ? "text" : "password"}
                endContent={ 
                    <Button variant='light' size='sm' isIconOnly onClick={() => setShowPassword(!showPassword) }>
                        { 
                            showPassword
                            ? (
                                <ViewOffIcon/>
                            )
                            : (
                                <ViewIcon/>
                            )
                        }
                    </Button>
                }
            />

            <div className='flex items-center justify-between'>
                <Checkbox defaultSelected size='sm'>Mantener sesion activa</Checkbox>
                <p className='text-sm text-primary'>Recuperar contraseña</p>
            </div>

            <Button
                fullWidth
                color='primary'
                className='btn-gradient'
            >Iniciar Sesion</Button>

        </form>
    )
}
