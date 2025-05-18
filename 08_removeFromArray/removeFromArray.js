const removeFromArray = (array, ...args) => {
    let newArray= [];
   
    for (let arg of args) {
     newArray=array.filter( (element) => element !== arg)
     array=newArray;
}
 
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
