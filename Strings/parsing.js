function parseAndDisplayName(name) {
    let spacePos = name.indexOf(" ");
    let fName = name.substring(0, spacePos);
    let lName = name.substring(spacePos + 1);
    
    return `Name: ${name} \nFirst Name: ${fName} \nLast Name: ${lName}`;
}

console.log(parseAndDisplayName("Brenda Kaye"));
console.log(parseAndDisplayName("Ian Auston"));
console.log(parseAndDisplayName("Siddalee Grace"));