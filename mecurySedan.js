//this includes the vehicle class as a module
//Imports vehicle.js and the Vehicle class
const VehicleModule = require("./vehicle").Vehicle

class Car extends VehicleModule {
  //need constructor parameters from parent class
  constructor(make, model, year, color, mileage){
  //need super to call the parameters from parent class
  super(make, model, year, color, mileage)
    //new properties for car class
    this.maximumPassengers = 5; 
    this.passenger = 0;
    this.numberOfWheels = 4;
    this.maximumSpeed = 160;
    this.fuel = 10;
    this.scheduleService = false;
  }
}

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

