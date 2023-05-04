function convertCtoF(celsiusTemp) {
    let fahrenheitTemp = (celsiusTemp *1.8 ) + 32;

    return fahrenheitTemp;
}

console.log(convertCtoF(100));
console.log(convertCtoF(45));
console.log(convertCtoF(19));
console.log(convertCtoF(0));
console.log(convertCtoF(-7));
console.log(convertCtoF(-40));