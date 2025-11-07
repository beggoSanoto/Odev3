var MemoryCache = /** @class */ (function () {
    function MemoryCache() {
        this.data = new Map();
    }
    MemoryCache.prototype.set = function (key, value) {
        this.data.set(key, value);
    };
    MemoryCache.prototype.get = function (key) {
        return this.data.get(key);
    };
    MemoryCache.prototype.clear = function () {
        this.data.clear();
    };
    return MemoryCache;
}());
var cache = new MemoryCache();
cache.set("user:1_score", 100);
console.log(cache.get("user:1_score"));
cache.clear();
console.log(cache.get("user:1_score"));
