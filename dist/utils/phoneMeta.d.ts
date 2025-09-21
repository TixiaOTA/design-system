export interface CountryMeta {
    name: string;
    code: string;
    iso: string;
    flag: string;
    formatted: string;
    isValid: boolean;
}
export declare function getCountryMeta(phone: string): CountryMeta | null;
export declare function getCountryFromPhone(phone: string): {
    name: string;
    code: string;
    iso: string;
    flag: string;
} | null;
export declare function formatPhoneNumber(phone: string, format?: 'international' | 'national' | 'e164'): string;
export declare function isValidPhoneNumber(phone: string): boolean;
