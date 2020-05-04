// This code will be used to parse JSON files from C# without using any absurd libraries or coding practices.
let args = process.argv;
const fs = require('fs');
let json = JSON.parse(fs.readFileSync(args[2]));
let read = args[3];
json=json[args[3]]
for(var i = 0; i < args.length-4; i++){
  json = json[args[4+i]];
}
console.log(json);
