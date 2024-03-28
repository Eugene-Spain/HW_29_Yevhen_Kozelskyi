"use strict"
// Приветствую Вас в своем личном дневнике) Пишу по ходу дела)) Решил перескочить через одно дз, никак не могу просмотреть тот урок. Но скажу сразу что когда 
// я 3 раза подряд пересмотрел задачку которую ты давал на мидла , я почувствовал себя таким маааааленьким, едва заметным))) Но ниче, я обязательно пойму)))
// Возвращаемся к тому что имеем. Прототипы по уроку для меня, как и классы, показались просто максимально понятными, супер классная и полезная тема. 
// Но посмотрим что я скажу на 4 задании ахахахах.....

const vehicle = {  // Я тебя максимально уважаю, и считаю тебя супер крутым специалистом, но дело в том что я в браке на протяжении 11 лет, с филологом
                   // кафедры РГФ , преподавателем английского языка, и к сожалению я понахватался от нее всяких штук, что когда я слышу как кто-то неправильно
                   // произносит английские слова - у меня берет дрож по телу ))))) Ты у меня конечно не спрашивал и я не хочу показаться человеком который 
                   // выпендривается но это слово читается как "вИикл". Короче я должен был тебе об этом сказать(потому что сидело во мне )), но это с любовью :)
    start(){
        console.log(`VROOM VROOM`)
    },

    stop(){
        console.log(`SHHHHHHHHHHH`)
    }

}



const bike = {
    turnLightsOn(){
        console.log(`I can see the light`)
    },

    turnLightsOff(){
        console.log(`I can't see anything without light`)
    }
}
bike.__proto__ = vehicle

const car = {
    turnRadioOn(){
        console.log(`I can hear the music`)
    },

    turnRadioOff(){
        console.log(`And now I just sit in silence (Twenty One Pilots fans variation :)`)
    }
}
car.__proto__ = vehicle 

const sportBike = {
    turboModeOn(){
        console.log(`Rocket is on steady`)
    },

    turboModeOff(){
        console.log(`Everyone has been sleeping already, lets drive quietly`)
    }
}
sportBike.__proto__ = bike

const mountainBike = {
    suspensionStatus(){
        console.log(`Suspension is set to the hardest level`)
    },

    tirePressureStatus(){
        console.log(`Tires are okay, lets go to Himalayas`)
    }
}
mountainBike.__proto__ = bike

const SUV = {
    heatSeatsOn(){
        console.log(`Feeling cold? I am going to resolve this problem`)
    },

    heatSeatsOff(){
        console.log(`Hot enough? I'll turn it off`)
    }
}
SUV.__proto__ = car

const supercar = {
    openAllDoors(){
        console.log(`Be cool, open the doors by pushing only one button`)
    },

    changeColor(){
        console.log(`Randomly change the color of your car just because you can`)
    }
}
supercar.__proto__ = car

// я очень сомневаюсь конечно что тебе надо проверять это через консоль... уж слишком легко и понятно, но я типа позаботился о тебе :))) 
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