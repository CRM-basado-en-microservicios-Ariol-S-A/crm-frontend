import { RecoveryPasswordForm } from "@/modules/auth";

export default function () {


    return (
        <section className='recovery__page'>
            <div className="container">

                <div className='mb-[2rem]'>
                    <h1 className="text-3xl mb-2 font-semibold">Recupera tu contraseña! 👨‍💻</h1>
                    <p className='text-sm'>Ingresa tu correo electronico</p>
                </div>

                <RecoveryPasswordForm/>
                

            </div>
        </section>
    );
}