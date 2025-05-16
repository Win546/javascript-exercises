const repeatString = function(string,repeat) {
if(string == "") return "Add a string";
if(repeat <= 0) return "Add a number greater than 0";
let newString=""
for (let i=0; i<=repeat;i++){
    newString+=string
}
return newString
};

// Do not edit below this line
module.exports = repeatString;
