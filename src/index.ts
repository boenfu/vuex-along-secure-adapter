import SecureLS from "secure-ls";

class SecureAdapter<TSchema = any> {
  constructor(private source: string) {}

  read(): TSchema {
    return SecureAdapter.secureLS.get(this.source);
  }

  write(data: TSchema) {
    SecureAdapter.secureLS.set(this.source, data);
  }

  static secureLS: SecureLS;
}

export default function (
  options: ConstructorParameters<typeof SecureLS>[0] = { encodingType: "aes" }
) {
  SecureAdapter.secureLS = new SecureLS(options);

  return {
    local: SecureAdapter,
    sync: true,
  };
}
