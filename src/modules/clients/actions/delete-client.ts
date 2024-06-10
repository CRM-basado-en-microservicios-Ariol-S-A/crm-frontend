"use server"

import apiDb from "@/lib/apiDb"
import { revalidatePath } from "next/cache";

export const deleteClient = async (id: number | string) => {
    try {
        
        const { data } = await apiDb.delete<{message: string}>(`/clients/${ id }`);

        revalidatePath('/admin/clients')

        return data.message;

    } catch (error) {
        throw error;
    }
}