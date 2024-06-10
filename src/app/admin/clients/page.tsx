import { ClientTable, TotalClientsCard, getAllClients } from "@/modules/clients";

interface Params {
    params: { slug: string }
    searchParams: { [key: string]: number | undefined }
}

export default async function ClientsPage({ params, searchParams }: Params) {

    const clientResponse = await getAllClients(searchParams.page, searchParams.limit);

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