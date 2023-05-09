function parseAndDisplayName(name) {
    let spacePos = name.indexOf(" ");
    let spacePos2 = name.lastIndexOf(" ");

    let fName = name.substring(0, spacePos);
    let mName = "";
    let lName = "";

    if (spacePos2 === -1) {
        fName = name;

        return `Name: ${name} \nOnly Name: ${name}`;

    } else if (spacePos === spacePos2) {
        fName = name.substring(0, spacePos);
        lName = name.substring(spacePos + 1);

        return `Name: ${name} \nFirst Name: ${fName} \nLast Name: ${lName}`;

    } else {
        fName = name.substring(0, spacePos);
        mName = name.substring(spacePos + 1, spacePos2);
        lName = name.substring(spacePos2 + 1);
    }

    return `Name: ${name} \nFirst Name: ${fName} \nMiddle Name: ${mName} \nLast Name: ${lName}`;
}

console.log(parseAndDisplayName("Cher"));
console.log(parseAndDisplayName("Brenda Kaye"));
console.log(parseAndDisplayName("Dana Lynn Wyatt"));