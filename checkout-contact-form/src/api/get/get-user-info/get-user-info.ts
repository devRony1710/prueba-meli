import { ApiInstance } from "../../instance";
import { isAxiosError } from "axios";
import type { ResponseUserInfo } from "./get-user-info.types";

export const getUserInfo = async (token: string, referrer: string): Promise<ResponseUserInfo> => {
    try {
        const response = await ApiInstance.get("/users", {
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
