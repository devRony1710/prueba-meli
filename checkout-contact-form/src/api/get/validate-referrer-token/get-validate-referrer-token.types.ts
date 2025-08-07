export interface ResponseValidateReferrerToken {
    success: boolean;
    message: string;
    data: {
        referrer: string;
        token: string;
    }
}