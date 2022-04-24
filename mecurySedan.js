//this includes the vehicle class as a module
//Imports vehicle.js and the Vehicle class

//I am confused because the following line here 
//and Line 89 on vehicle.js
//are throwing errors, but this is what the solution code has.
//I compared the rest of my code with the solution code, and it 
//seems to match up?

//I tested this by making a copy of the solution code, and 
//the solution code was throwing the same errors too.
//I don't know if my PC is being the issue.
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
  //methods

  //Load Passenger(num): 
  //if passenger less than maximumPassengers then 
  //availableRoom == true

  loadPassenger(num){
      //check the current number of passengers
      //and compare with the max passengers allowed
    if(this.passenger < this.maximumPassengers){
        //if current passengers is lower, then check
        //the number of passengers to be loaded.
        //If the number is still smaller than max passengers,
        //there is room available
        if((num + this.passenger) <= this.maximumPassengers){
            return this.passenger
        } else {
        console.log('Not enough room!')
    } 
    } else {
        console.log('This vehicle is already full.')
    }
  }

  //Start:
  //if fuel is greater than 0, then start == true
  start(){
    if(this.fuel > 0){
        console.log('Starting!')
        //this.started is a property in the vehicle class,
        //so it carries over
        return this.started = true
    } else {
        console.log('Car needs fuel!')
        return this.started = false
    }
  }

  //Schedule Service(mileage)
  //if mileage is greater than 30000, time for maintenance == true
  scheduleService(mileage){
    if(this.mileage > 30000){
        return this.scheduleService = true
    } //only runs if the mileage is too high
  }


}

//this shows how to call from this module...
let newCar = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "blue", "15000");
console.log(newCar.make)

newCar.loadPassenger(2)
newCar.start()
newCar.scheduleService(15000)