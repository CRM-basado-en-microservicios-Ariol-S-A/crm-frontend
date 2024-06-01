import { CheckListIcon, Home01Icon, Settings02Icon, Task01Icon, Task02Icon, UserIcon, UserMultipleIcon, icons } from 'hugeicons-react';


export const principalMenu = [
    {
        name: 'Dashboard',
        path: '/admin/dashboard',
        icon: <Home01Icon size={18}/>
    },
    {
        name: 'Tareas',
        path: '/admin/tasks',
        icon: <CheckListIcon size={18}/>
    },
]

export const aplicationsMenu = [
    {
        name: 'Inventarios',
        path: '/admin/inventory',
        icon: <Task01Icon size={18}/>,
        children: [
            {
                name: 'Productos',
                path: '/admin/inventory/productos',
            },
            {
                name: 'Gastos/Entradas',
                path: '/admin/inventory/incomes',
            },
            {
                name: 'Ventas',
                path: '/admin/inventory/sales',
            },
            {
                name: 'Almacenes',
                path: '/admin/inventory/warehouses',
            },
            {
                name: 'Proveedores',
                path: '/admin/inventory/providers',
            },
        ]
    },
    {
        name: 'Clientes',
        path: '/admin/clients',
        icon: <UserMultipleIcon size={18}/>,
        children: [
            {
                name: 'Contactos',
                path: '/admin/clients/contacts',
            },
            {
                name: 'Leads',
                path: '/admin/clients/leads',
            }
        ]
    },
]

export const additionalMenu = [
    {
        name: 'Perfil',
        path: '/admin/profile',
        icon: <UserIcon size={18}/>
    },
    {
        name: 'Ajustes',
        path: '/admin/settings',
        icon: <Settings02Icon size={18}/>
    },
]