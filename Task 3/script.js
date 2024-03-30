"use strict"

function vehicle() {
    this.start = function() {
        console.log("VROOM VROOM");
    };

    this.stop = function() {
        console.log("SHHHHHHHHHH");
    };
}


function bike() {
    this.turnLightsOn = function() {
        console.log("I can see the light");
    };

    this.turnLightsOff = function() {
        console.log("I can't see anything without light");
    };
}

bike.prototype = new vehicle();

function car() {
    this.turnRadioOn = function() {
        console.log("I can hear the music");
    };

    this.turnRadioOff = function() {
        console.log("And now I just sit in silence (Twenty One Pilots fans variation :)");
    };
}
car.prototype = new vehicle();


function sportBike(model, engine) {
    this.model = model;
    this.engine = engine;

    this.turboModeOn = function() {
        console.log("Rocket is on steady");
    };

    this.turboModeOff = function() {
        console.log("Everyone has been sleeping already, lets drive quietly");
    };
}
sportBike.prototype = new bike();

function mountainBike(model, clearance) {
    this.model = model;
    this.clearance = clearance;

    this.suspensionStatus = function() {
        console.log("Suspension is set to the hardest level");
    },

    this.tirePressureStatus = function() {
        console.log("Tires are okay, lets go to Himalayas");
    };
}
mountainBike.prototype = new bike();

function SUV(model, year) {
    this.model = model;
    this.year = year;

    this.heatSeatsOn = function() {
        console.log("Feeling cold? I am going to resolve this problem");
    };

    this.heatSeatsOff = function() {
        console.log("Hot enough? I'll turn it off");
    };
}
SUV.prototype = new car();

function supercar(model, price) {
    this.model = model;
    this.price = price;

    this.openAllDoors = function() {
        console.log("Be cool, open the doors by pushing only one button");
    };

    this.changeColor = function() {
        console.log("Randomly change the color of your car just because you can");
    };
}


supercar.prototype = new car();

const sportBike1 = new sportBike("Honda", 2.2);
console.log(sportBike1);

const mountainBike1 = new mountainBike("Volvo", 1.3);
console.log(mountainBike1);

const SUV1 = new SUV("Range Rover", 2019);
console.log(SUV1.start());

const supercar1 = new supercar("Bugatti", 850000);
console.log(supercar1.start());



vehicle.prototype.start = function() {
    console.log("Let's drive together");
};
const SUV2 = new SUV("Jeep", 2020);
