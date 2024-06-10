export type { IClient } from './interfaces/client';
export type { IClientsResponse } from './interfaces/clients-response';
export type { ICreateClientResponse } from './interfaces/create-cliente-response';
// ACTIONS
export { deleteClient } from './actions/delete-client';
export { getAllClients } from "./actions/get-all-clients";
export { createClient } from './actions/create-client';


// INTERFACES

// COMPONENTS
export { ClientTable } from "./components/client-table/ClientTable";
export { NewClientForm } from './components/NewClientForm';
