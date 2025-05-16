const repeatString = function(string,repeat) {
if(string == "") return "Add a string";
let newString=""
for (let i=0; i<repeat;i++){
    newString+=string
}
return newString
};

// Do not edit below this line
module.exports = repeatString;
