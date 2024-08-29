"use client"

import { TableHeader, TableColumn, TableBody, TableRow, TableCell, Table } from '@nextui-org/react';
import { tableClassNames } from '@/lib';

export const BrandTable = () => {
    return (
        <section className='container pt-8'>

            <h2>Marcas</h2>
            <Table

                classNames={ tableClassNames }
            >
                <TableHeader>
                    <TableColumn>A</TableColumn>
                </TableHeader>
                
                <TableBody>
                    <TableRow>
                        <TableCell>A</TableCell>
                    </TableRow>


                </TableBody>
            </Table>
        </section>
    )
}
