var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.drive = function () {
        console.log("Araç sürülüyor...");
    };
    return Car;
}());
var Truck = /** @class */ (function () {
    function Truck() {
    }
    Truck.prototype.drive = function () {
        console.log("Kamyon sürülüyor...");
    };
    Truck.prototype.loadCargo = function () {
        console.log("Kargo yükleniyor...");
    };
    return Truck;
}());
function useVehicle(vehicle) {
    vehicle.drive();
    if ("loadCargo" in vehicle) {
        vehicle.loadCargo();
    }
}
var car = new Car();
var truck = new Truck();
useVehicle(car);
useVehicle(truck);
