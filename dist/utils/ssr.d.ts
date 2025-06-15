export declare const isBrowser: boolean;
export declare const getWindow: () => (Window & typeof globalThis) | {
    innerHeight: number;
    innerWidth: number;
    addEventListener: () => void;
    removeEventListener: () => void;
};
export declare const getDocument: () => Document | {
    addEventListener: () => void;
    removeEventListener: () => void;
    dispatchEvent: () => void;
};
