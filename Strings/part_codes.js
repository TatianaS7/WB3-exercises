function getSupplier(code) { //all characters before :
    let colonPos = code.indexOf(":");
    let supplier = code.substring(0, colonPos);

    return supplier;
}

function getProductNumber(code){ //all characters between : and -
    let colonPos = code.indexOf(":");
    let dashPos = code.indexOf("-");
    let productNumber = code.substring(colonPos + 1, dashPos);

    return productNumber;
}

function getSize(code) { //all characters after -
    let dashPos = code.indexOf("-");
    let size = code.substring(dashPos + 1);

    return size;
}

console.log(getSupplier("ACME:123-L"));
console.log(getProductNumber("ACME:123-L"));
console.log(getSize("ACME:123-L"));