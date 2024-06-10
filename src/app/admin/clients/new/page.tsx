import { TitlePage } from "@/modules/shared";
import { NewClientForm } from "@/modules/clients";

export default function NewClientPage() {
    return (
        <>  
            <TitlePage
                linkName="Volver"
                pathname="/admin/clients"
                subTitle="Agrega un nuevo cliente al sistema."
                title="Regsitro de Clientes"

            />
            <NewClientForm />
        </>
    );
}