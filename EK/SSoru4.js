function getProperty(obj, key) {
    return obj[key];
}
var user = { name: "Ebubekir", age: 42 };
console.log(getProperty(user, "name"));
console.log(getProperty(user, "age"));
