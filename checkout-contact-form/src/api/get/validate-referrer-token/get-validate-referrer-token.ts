import { ApiInstance } from "../../instance";
import { isAxiosError } from "axios";
import type { ResponseValidateReferrerToken } from "./get-validate-referrer-token.types";

export const getValidateReferrerToken = async (referrer: string, token: string): Promise<ResponseValidateReferrerToken> => {
    try {
        const response = await ApiInstance.get("/checkout", {
            params: {
                referrer,
                token
            }
        });
        return response.data;
    } catch (error) {
        if(isAxiosError(error)) {
            throw new Error(error.response?.data);
        }
        throw new Error('An unexpected error occurred');
    }
};