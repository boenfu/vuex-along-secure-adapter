import SecureLS from "secure-ls";
declare class SecureAdapter<TSchema = any> {
    private source;
    constructor(source: string);
    read(): TSchema;
    write(data: TSchema): void;
    static secureLS: SecureLS;
}
export default function (options?: ConstructorParameters<typeof SecureLS>[0]): {
    local: typeof SecureAdapter;
    sync: boolean;
};
export {};
