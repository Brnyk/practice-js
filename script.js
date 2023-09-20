function logger(text) {
    console.log(text)
}

/* radical function */

function radicalNumbers (a){
    let rn = Math.sqrt(a);
    return rn;
}

logger(radicalNumbers(4))

/* square rooting function */

function squareNumbers (b){
    let sn = b * b;
    return sn;
}


logger(squareNumbers(10))

/* centimeter to inch function */

function toCentimeter(inch) {
    let tc = 0;
    tc = inch * 2.54;
    return tc;
}

logger(toCentimeter(5))

/* able to buy alcohol function */

/* just trying boolean with the use of w3 */

function sellingAlcohol (a){ 
    if (a >= 18) {
        return text = "Can buy alcohol";
    }
    else if (a < 18)
        return text ="Too young to buy alcohol boohoo";
}

logger(sellingAlcohol(5))