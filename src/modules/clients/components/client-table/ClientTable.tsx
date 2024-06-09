"use client"
import React from 'react'

import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { ClientTableDeleteAction } from './ClientTableDeleteAction';
import { ClientTableHeader } from './ClientTableHeader';


export const ClientTable = () => {
    
    const classNames = React.useMemo(() => ({
        wrapper: ["bg-white", "rounded-md", "shadow-none"],
        th: ["bg-transparent", "text-default-500", "border-b", "border-divider", "text-base"],
        tr: ["hover:bg-gray-400/10", "cursor-pointer", "transition-all"]
    }), []);
    
    return (
        <section className='container pt-8'>
            <Table
                topContent={ <ClientTableHeader/> }
                aria-label="Example table with custom cells, pagination and sorting"
                bottomContentPlacement="outside"
                checkboxesProps={{
                    classNames: {
                        wrapper: "after:bg-foreground after:text-background text-background",
                    },
                }}
                classNames={classNames}
                // topContentPlacement="outside"
            >
                <TableHeader>
                    <TableColumn>Nro Cliente</TableColumn>
                    <TableColumn>Nombre</TableColumn>
                    <TableColumn>Cargo</TableColumn>
                    <TableColumn>Empresa</TableColumn>
                    <TableColumn>Direccion</TableColumn>
                    <TableColumn>Telefonos</TableColumn>
                    <TableColumn>Correo</TableColumn>
                    <TableColumn>Factura</TableColumn>
                    <TableColumn>NIT</TableColumn>
                    <TableColumn>Acciones</TableColumn>
                </TableHeader>
                <TableBody emptyContent={"No users found"}>

                    <TableRow >
                        <TableCell>asd</TableCell>
                        <TableCell>asd</TableCell>
                        <TableCell>asd</TableCell>
                        <TableCell>asd</TableCell>
                        <TableCell>asd</TableCell>
                        <TableCell>asd</TableCell>
                        <TableCell>asd</TableCell>
                        <TableCell>asd</TableCell>
                        <TableCell>asd</TableCell>
                        <TableCell>
                            <ClientTableDeleteAction/>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </section>
    )
}
