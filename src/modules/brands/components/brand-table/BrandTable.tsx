"use client"

import { formatDate, tableClassNames } from '@/lib';
import { BrandTableHeader, BrandTablePagination, GetBrandsResponse, EditBrandModal, DeleteBrandModal} from '@/modules/brands';

import { TableHeader, TableColumn, TableBody, TableRow, TableCell, Table } from '@nextui-org/react';


interface Props {
    getBrandsResponse: GetBrandsResponse;
}

export const BrandTable = ({ getBrandsResponse }: Props) => {

    const { marcas, meta } = getBrandsResponse;
    
    return (
        <section className='container pt-8'>
            <Table
                classNames={tableClassNames}
                topContent={<BrandTableHeader />}
                bottomContent={ <BrandTablePagination totalPages={ meta.lastPage } page={meta.page}/> }
                aria-label="Brand table"
            >
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>Nombre</TableColumn>
                    <TableColumn>Descripción</TableColumn>
                    <TableColumn>F. Creación</TableColumn>
                    <TableColumn>F. Actualización</TableColumn>
                    <TableColumn>Acciones</TableColumn>
                </TableHeader>

                <TableBody>
                    {
                        marcas.map(brand => (
                            <TableRow key={brand.id}>
                                <TableCell width={200}>
                                    <p className='line-clamp-1'>{brand.id}</p>
                                </TableCell>
                                <TableCell>{brand.nombre}</TableCell>
                                <TableCell>
                                
                                    <p className='line-clamp-1'>{brand.descripcion ? brand.descripcion : 'Sin descripción'}</p>
                                </TableCell>
                                <TableCell>{formatDate(brand.createdAt)}</TableCell>
                                <TableCell>{formatDate(brand.updatedAt)}</TableCell>
                                <TableCell>
                                    <EditBrandModal brand={ brand }/>
                                    <DeleteBrandModal brand={ brand } />
                                </TableCell>
                            </TableRow>

                        ))

                    }

                </TableBody>
            </Table>
        </section>
    )
}
