type CreateGetters<T> = {
    [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};
type UserProps = { id: number; name: string; };
type UserGetters = CreateGetters<UserProps>;
const userGetters: UserGetters = {
    getId: () => 1,
    getName: () => "Ebubekir"
};
console.log("Soru 13 Başarılı!");