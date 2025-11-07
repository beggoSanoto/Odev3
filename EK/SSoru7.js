var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var users = [
    { id: 1, name: "Ali", email: "ali@mail.com" },
    { id: 2, name: "Ayşe", email: "ayse@mail.com" },
];
function updateUser(id, updates) {
    var user = users.find(function (u) { return u.id === id; });
    if (!user) {
        return undefined;
    }
    var updatedUser = __assign(__assign({}, user), updates);
    return Object.freeze(updatedUser);
}
console.log("Eski: ", users[0]);
var updatedUser = updateUser(1, { email: "ali.yeni@mail.com" });
console.log("Yeni: ", updatedUser);
