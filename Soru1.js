var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function mergeArrays(arr1, arr2) {
    return __spreadArray(__spreadArray([], arr1, true), arr2, true);
}
var numArr = [1, 2, 3];
var strArr = ["a", "b", "c"];
console.log(mergeArrays(numArr, strArr));
