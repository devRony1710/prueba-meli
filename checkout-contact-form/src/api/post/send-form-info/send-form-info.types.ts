export type FormInfoType = {
    name: string;
    address: string;
    phone: string;
    country: string;
    captchaToken: string;
}

export interface SendFormInfoProps {
    body: FormInfoType;
    referrer: string;
    token: string;
}