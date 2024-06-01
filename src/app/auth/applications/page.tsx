import { BrochureIcon } from '@/modules/shared';

export default function() {
    return (
        <section className="flex items-center justify-center w-full h-full">
            <div className="container">
                <div className="mb-8">
                    <h1 className="text-3xl font-semibold">Bienvenido</h1>
                    <p>Ingresa a una aplicacion</p>
                </div>

                <ul className='grid grid-cols-2 gap-8'>

                    <li className='aplication__card'>
                        <div className="aplication__card--icon">
                            <BrochureIcon/> 
                        </div>
                        <p className='font-semibold text-lg'>Inventarios</p>
                    </li>

                    <li className='aplication__card'>
                        <div className="aplication__card--icon">
                            <BrochureIcon/> 
                        </div>
                        <p className='font-semibold text-lg'>Clientes</p>
                    </li>
                
                    <li className='aplication__card'>
                        <div className="aplication__card--icon">
                            <BrochureIcon/> 
                        </div>
                        <p className='font-semibold text-lg'>Usuarios</p>
                    </li>

                    
                    <li className='aplication__card'>
                        <div className="aplication__card--icon">
                            <BrochureIcon/> 
                        </div>
                        <p className='font-semibold text-lg'>Ventas</p>
                    </li>
                
                    <li className='aplication__card'>
                        <div className="aplication__card--icon">
                            <BrochureIcon/> 
                        </div>
                        <p className='font-semibold text-lg'>Importaciones y exportaciones</p>
                    </li>
                
                
                </ul>

            </div>
        </section>
    );
}