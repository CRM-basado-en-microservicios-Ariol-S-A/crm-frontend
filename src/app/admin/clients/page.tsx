import { ClientTable, getAllClients } from "@/modules/clients";

export default async function ClientsPage() {

    const clientResponse = await getAllClients();

    return (
        <>
            <ClientTable
                clientResponse={ clientResponse }
            />
        </>
    );
}