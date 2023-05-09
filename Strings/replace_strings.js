let message = "Our corporate offices are located in Dallas";  
let array = message.split(" ");

let index = array.indexOf("Dallas");
    array[index] = "Austin";

message =  array.join(" ");

console.log(message);