import { ApiInstance } from "../../instance";
import type { GetCountriesListResponse } from "./get-countries-list.types";
import { isAxiosError } from "axios";

export const getCountriesList = async (): Promise<GetCountriesListResponse[]> => {
    try {
        const response = await ApiInstance.get('/countries');
        return response.data;
    } catch (error) {
        if(isAxiosError(error)) {
            throw new Error(error.response?.data.message);
        }
        throw new Error('An unexpected error occurred');
    }
};