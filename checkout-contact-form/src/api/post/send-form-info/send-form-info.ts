import { ApiInstance } from "@/api/instance";
import type { SendFormInfoProps } from "./send-form-info.types";
import { isAxiosError } from "axios";

export const sendFormInfo = async ({ body, referrer, token }: SendFormInfoProps) => {
    try {
        const response = await ApiInstance.post('/checkout/next-step', body, {
            params: {
                referrer,
                token
            }
        });
        return response.data;
    } catch (error) {
        if(isAxiosError(error)) {
            throw new Error(error.response?.data.message);
        }
        throw new Error('An unexpected error occurred');
    }
}