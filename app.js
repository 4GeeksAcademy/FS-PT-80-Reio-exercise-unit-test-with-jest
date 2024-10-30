// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}


// app.js file content
// This is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// Just a console log for ourselves
console.log(sum(7,3))

// Export the function to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = { sum };

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}


const fromDollarToYen = function(DollarValue){
    let YenValue = DollarValue * 156.5;

    return YenValue;
}

const fromYenToPound = function(YenValue){
    let PoundValue = YenValue * 0.87;

    return PoundValue;
}

console.log(fromDollarToYen(1), fromYenToPound(1));


module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound }
