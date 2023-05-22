//Define a constructor function Car with the ff. properties: make, model, year
class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
   //Add method getDescription that returns info of the Car 
    getDescription(){
        return `make ${this.make}, model ${this.model}, year ${this.model}`;
    }
}

// create a ElectricCar subclass, include all Car param plus range
class ElectricCar extends Car {
    constructor(make, model, year, range) {
        super(make, model, year);
        this.range = range;       
    }
    getDescription() {
        return `make: ${this.make}, model: ${this.model}, year: ${this.model}, range: ${this.range}`;
    }
}

// print string containing ElectricCar infos
const carInfo = new ElectricCar('Tesla', 'Model S', '2019', '300');
console.log(carInfo.getDescription());