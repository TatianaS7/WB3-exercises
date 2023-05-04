function getSocSecTax(grossPay) {
    let ssTax = grossPay * .062;

    return ssTax;
}

function getMedicareTax(grossPay) {
    let medicareTax = grossPay * .0145;

    return medicareTax;
}

function getFederalTax(grossPay, witholdingCode) {
    if (witholdingCode >= 4) {
        federalTax = grossPay * (0.18 - ((witholdingCode - 4) * .005));

    } else if(witholdingCode === 3){
        federalTax = grossPay * 0.185;

    } else if(witholdingCode === 2) {
        federalTax = grossPay * 0.195;

    } else if (witholdingCode === 1) {
        federalTax = grossPay * 0.21;

    } else if(witholdingCode === 0) {
        federalTax = grossPay * 0.23;
        }
    return federalTax;
}

console.log(getSocSecTax(750));
console.log(getSocSecTax(1550));
console.log(getSocSecTax(1100));

console.log(getMedicareTax(750));
console.log(getMedicareTax(1550));
console.log(getMedicareTax(1100));

console.log(getFederalTax(750, 0));
console.log(getFederalTax(1550, 2));
console.log(getFederalTax(1100, 6));



