import { NewClientForm } from "@/modules/clients";

export default function NewClientPage() {
    return (
        <>
            <section>
                <h1>Registro de clientes</h1>
                <p>Agrega un nuevo cliente a la base de datos.</p>
            </section>
            <NewClientForm/>
        </>
    );
}