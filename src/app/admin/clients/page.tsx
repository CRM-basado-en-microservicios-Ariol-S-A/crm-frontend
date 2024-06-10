import { ClientTable, TotalClientsCard, getAllClients } from "@/modules/clients";

export default async function ClientsPage() {

    const clientResponse = await getAllClients();

    return (
        <>
            <section className="container pt-8">

                <TotalClientsCard
                    totalClients={clientResponse.meta.total}
                />
            </section>
            <ClientTable
                clientResponse={clientResponse}
            />
        </>
    );
}

export const revalidate = 0;