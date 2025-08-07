export interface ResponseUserInfo {
    name: string;
    phone: string;
    address: string;
    country: {
        value: string;
        label: string;
    };
    token: string;
    captchaToken: string;
}
