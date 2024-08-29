import { BrandTable, getBrands, NewBrandForm } from '@/modules/brands';

export default async function BrandsPage() {

    const brands = await getBrands();

    console.log(brands)

    return (
        <>
            <section className="container pt-8">
                <NewBrandForm/>
            </section>      
            <BrandTable/>
        </>
    );
}