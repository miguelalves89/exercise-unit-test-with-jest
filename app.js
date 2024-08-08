

const sum =(a,b) => {
    return a + b;
}

//solo un registro en consola para nosotros
console.log(sum(7,3))



let oneEurols = {
    "JPY":156.5, //japan yen
    "USD":1.07, // us dollar
    "GBP":0.87, //british pound 
}



// Declaramos una función con el nombre exacto "formEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convertimos el valor a dólares
    let valueInDollar = valueInEuro * 1.07;
    // Retornamos el valor en dólares
    return valueInDollar;
}

const fromDollarToYen = function(valueInDollar) {
    // Convertimos el valor a dólares
    let valueInYen = valueInDollar * 156.5;
    // Retornamos el valor en yen
    return valueInYen;
}
const fromYenToPound = function(valueInYen) {
    // Convertimos el valor a dólares
    let valueInPound = valueInYen * 0.87;
    // Retornamos el valor en pound
    return valueInPound;
}


    module.exports = {sum, fromEuroToDollar,fromDollarToYen,fromYenToPound };