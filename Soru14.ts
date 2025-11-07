type DeepReadonly<T> = {
    readonly [K in keyof T]: T[K] extends object ? DeepReadonly<T[K]> : T[K];
};
type Config = { api: { url: string; }, features: string[] };
const config: DeepReadonly<Config> = {
    api: { url: "http://..." },
    features: ["A", "B"]
};
console.log("Soru 14 Başarılı!", config.api.url);