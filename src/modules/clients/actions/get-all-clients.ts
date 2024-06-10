"use server"
import { isAxiosError } from "axios"


import apiDb from "@/lib/apiDb"
import { IClientsResponse } from "../interfaces/clients-response"

export const getAllClients = async (page: number = 1, limit: number = 10) => {
    try {
        const { data } = await apiDb.get<IClientsResponse>('/clients', {
            params: {
                page,
                limit,
            }
        })

        return data

    } catch (error) {
        throw error;
    }
} 