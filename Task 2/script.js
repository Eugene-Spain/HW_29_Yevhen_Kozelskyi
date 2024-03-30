"use strict"
// Вот что-бы все задания были такие и дз делалось бы в 100 раз быстрее :) Вообще лично мое мнение - что куда лучше когда дз сложнее чем наоборот. Так или иначе
// надо закреплять полученную информацию на каком то хорошем практическом примере.

const vehicle = {  
    start(){
        console.log(`VROOM VROOM`)
    },

    stop(){
        console.log(`SHHHHHHHHHHH`)
    },
}

const bike = {
    turnLightsOn(){
        console.log(`I can see the light`)
    },

    turnLightsOff(){
        console.log(`I can't see anything without light`)
    }
}
Object.setPrototypeOf(bike, vehicle)

const car = {
    turnRadioOn(){
        console.log(`I can hear the music`)
    },

    turnRadioOff(){
        console.log(`And now I just sit in silence (Twenty One Pilots fans variation :)`)
    }
}
Object.setPrototypeOf(car, vehicle)

const sportBike = {
    turboModeOn(){
        console.log(`Rocket is on steady`)
    },

    turboModeOff(){
        console.log(`Everyone has been sleeping already, lets drive quietly`)
    }
}
Object.setPrototypeOf(sportBike, bike)

const mountainBike = {
    suspensionStatus(){
        console.log(`Suspension is set to the hardest level`)
    },

    tirePressureStatus(){
        console.log(`Tires are okay, lets go to Himalayas`)
    }
}
Object.setPrototypeOf(mountainBike, bike)

const SUV = {
    heatSeatsOn(){
        console.log(`Feeling cold? I am going to resolve this problem`)
    },

    heatSeatsOff(){
        console.log(`Hot enough? I'll turn it off`)
    }
}
Object.setPrototypeOf(SUV, car)

const supercar = {
    openAllDoors(){
        console.log(`Be cool, open the doors by pushing only one button`)
    },

    changeColor(){
        console.log(`Randomly change the color of your car just because you can`)
    }
}
Object.setPrototypeOf(supercar, car)

// Ну если честно то хорошее практическое задание где ты можешь запомнить как прописывается синтаксис ))
console.log('vehicle:')
console.log(vehicle)
console.log('car:')
console.log(car)
console.log('bike:')
console.log(bike)
console.log('sportBike:')
console.log(sportBike)
console.log('mountainBike:')
console.log(mountainBike)
console.log('SUV:')
console.log(SUV)
console.log('supercar:')
console.log(supercar)