import SecureLS from "secure-ls";
var SecureAdapter = /** @class */ (function () {
    function SecureAdapter(source) {
        this.source = source;
    }
    SecureAdapter.prototype.read = function () {
        return SecureAdapter.secureLS.get(this.source);
    };
    SecureAdapter.prototype.write = function (data) {
        SecureAdapter.secureLS.set(this.source, data);
    };
    return SecureAdapter;
}());
export default function (options) {
    if (options === void 0) { options = { encodingType: "aes" }; }
    SecureAdapter.secureLS = new SecureLS(options);
    return {
        local: SecureAdapter,
        sync: true,
    };
}
