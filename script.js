function logger(text) {
    console.log(text)
}


function radicalNumbers (a){
    let radicalNumbers = Math.sqrt(a);
    return radicalNumbers;
}

logger(radicalNumbers(4))

function squareNumbers (b){
    let squareNumbers = b * b;
    return squareNumbers;
}


logger(squareNumbers(10))

function toCentimeter(inch) {
    let toCentimeter = inch * 2.54;
    return toCentimeter;
}

logger(toCentimeter(7))

function sellingAlcohol (a){ /* just trying boolean with the use of w3 */
    if (a >= 18) {
        return tex = "Can buy alcohol";
    }
    else if (a < 18)
        return text ="Too young to buy alcohol";
}

logger(sellingAlcohol(5))