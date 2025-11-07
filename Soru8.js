function sum() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, n) { return total + n; }, 0);
}
console.log(sum(1, 2, 3));
console.log(sum(10, 20, 30, 40));
