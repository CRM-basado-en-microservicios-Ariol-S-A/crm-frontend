
export default function ({ children }: { children: React.ReactNode }) {
    return (
        <div className="auth__layout">
            <div className="auth__presentation">
                <div className="container">
                    <div className="auth__presentation--logo">
                        <h1 className="text-5xl leading-[1.2] font-semibold mb-4">
                            Sistema CRM <br />
                            <span className="text-primary-600">Ariol S.A.</span>
                        </h1>
                        <p className="text-slate-200 text-lg">
                            Mejora la gestion de tus clientes, inventarios y tus ventas
                        </p>
                    </div>
                </div>
            </div>
            <main className="col-span-4">
                {children}
            </main>
        </div>
    );
}