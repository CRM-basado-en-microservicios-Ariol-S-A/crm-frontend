
export default function({ children }: { children: React.ReactNode }) {
    return (
        <div className="aplications__layout">
            
            <div className="aplications__presentation">
                <div className="aplications__presentation--logo">
                    <h1 className="text-[2vw] md:text-4xl text-white font-semibold mb-4">Aplicaciones</h1>
                    <p className="text-indigo-100">Selecciona la aplicacion a la que deseas ingresar y administrar</p>
                </div>
            </div>

            <main className="col-span-7">
                { children }
            </main>
        </div>
    );
}