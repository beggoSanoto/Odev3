var MathHelper = /** @class */ (function () {
    function MathHelper() {
    }
    MathHelper.calculateCircumference = function (radius) {
        return 2 * MathHelper.PI * radius;
    };
    MathHelper.PI = 3.14159;
    return MathHelper;
}());
console.log(MathHelper.PI);
console.log(MathHelper.calculateCircumference(10));
