var Logger = /** @class */ (function () {
    function Logger() {
        this.logHistory = [];
    }
    Logger.prototype.log = function (message) {
        console.log(message);
        this.logHistory.push(message);
    };
    Logger.prototype.getHistory = function () {
        return this.logHistory;
    };
    return Logger;
}());
var logger = new Logger();
logger.log("İlk log.");
logger.log("İkinci log.");
console.log(logger.getHistory());
