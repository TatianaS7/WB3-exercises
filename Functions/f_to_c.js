function convertFtoC(fahrenheitTemp) {
    let celsiusTemp = (fahrenheitTemp - 32) / 1.8;

    return celsiusTemp;
}

console.log(convertFtoC(212));
console.log(convertFtoC(90));
console.log(convertFtoC(72));
console.log(convertFtoC(32));
console.log(convertFtoC(0));
console.log(convertFtoC(-40));