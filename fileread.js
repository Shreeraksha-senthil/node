var fs = require("fs"); 
var file=fs.readFileSync("input.txt");
console.log(file.toString());
console.log("End of Program execution"); 