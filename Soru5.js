var users = [
    { id: 1, name: "Ali", email: "ali@mail.com" },
    { id: 2, name: "Ayşe", email: "ayse@mail.com" },
];
// 2. Implementasyon
function search(param) {
    if (typeof param === "number") {
        return users.find(function (user) { return user.id === param; });
    }
    else {
        return users.filter(function (user) { return user.name === param; });
    }
}
console.log(search(1)); // { id: 1, name: 'Ali', email: 'ali@mail.com' }
console.log(search("Ayşe")); // [ { id: 2, name: 'Ayşe', email: 'ayse@mail.com' } ]
// BEKLENEN EKRAN ÇIKTISI:
// { id: 1, name: 'Ali', email: 'ali@mail.com' }
// [ { id: 2, name: 'Ayşe', email: 'ayse@mail.com' } ]
