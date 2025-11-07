var users = [
    { id: 1, name: "Ali", email: "ali@mail.com" },
    { id: 2, name: "Ayşe", email: "ayse@mail.com" },
];
function search(param) {
    if (typeof param === "number") {
        return users.find(function (user) { return user.id === param; });
    }
    else {
        return users.filter(function (user) { return user.name === param; });
    }
}
console.log(search(1));
console.log(search("Ayşe"));
