import Link from 'next/link';

import { Input } from '@nextui-org/input';
import { Button } from '@nextui-org/button';

export const RecoveryPasswordForm = () => {

    const inputWrapper = "shadow-none bg-white border border-gray-400 rounded outline-none";
    const label = "font-medium"


    return (
        <form className='space-y-4'>

            <Input
                variant='bordered'
                size='sm'
                label="Correo electronico"
                placeholder='Ingresa tu correo electronico'
                classNames={{
                    inputWrapper,
                    label
                }}
            />

            <Button
                color='primary'
                fullWidth
                className='btn-gradient'
            >Recuperar contraseña</Button>

            <Link
                className='block text-sm text-primary text-center'
                href='/auth/login'
            >
                Quiero iniciar sesion
            </Link>
        </form>
    )
}
