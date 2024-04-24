import { LoginForm } from '@/modules/auth';


export default function () {
    return (
        <section className="login__page">
            <div className="container">

                <div className='mb-[3rem]'>
                    <h1 className="text-3xl mb-2 font-semibold">Bienvenido de nuevo! 👋</h1>
                    <p className='text-sm'>Ingresa tus credenciales y comienza a gestionar tu empresa</p>
                </div>

                <LoginForm />
            </div>
        </section>
    );
}