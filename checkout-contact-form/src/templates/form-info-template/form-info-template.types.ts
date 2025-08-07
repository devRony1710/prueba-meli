import { z } from "zod";
import type { Control, FieldErrors, UseFormWatch } from "react-hook-form";
import type { GetCountriesListResponse } from "@/api/get/get-countries-list/get-countries-list.types";

export interface UseFormInfoLogicInterface {
    recaptchaRef: React.RefObject<any>;
    handleOnSubmit: (e: React.FormEvent) => void;
    isValid: boolean;
    control: Control<{
        name: string;
        address: string;
        phone: string;
        country: {
            value: string;
            label: string;
        };
    }, unknown, {
        name: string;
        address: string;
        phone: string;
        country: {
            value: string;
            label: string;
        };
    }>
    errors: FieldErrors<{
        name: string;
        address: string;
        phone: string;
        country: {
            value: string;
            label: string;
        };
    }>
    watch: UseFormWatch<{
        name: string;
        address: string;
        phone: string;
        country: {
            value: string;
            label: string;
        };
    }>
    captchaVerified: boolean;
    handleCaptchaVerify: () => void;
    countries: GetCountriesListResponse[];
}

export const formSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters long'),
    address: z.string().min(2, 'Address must be at least 2 characters long'),
    phone: z.string().regex(/^[0-9]+$/, 'Phone must be a number').min(10, 'Phone must be at least 10 characters long'),
    country: z.object({
        value: z.string(),
        label: z.string(),
    })
})