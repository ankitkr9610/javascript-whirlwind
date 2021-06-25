/*
    Write a function deepEqual that takes two values and returns true only if they are the same value or are objects with the same properties, 
    where the values of the properties are equal when compared with a recursive call to deepEqual.
*/

function deepEqual(obj1, obj2) {
    if(obj1 === obj2) {
        return true;
    }

    if(typeof obj1 != "object" || typeof obj2 != "object" || obj1 == null|| obj2 == null){
          return false 
       } 
  
    if(Object.keys(obj1).length != Object.keys(obj2).length) {
        return false;
        }

    for(let prop of Object.keys(obj1)){
        if((!Object.keys(obj2).includes(prop)) || (!deepEqual(obj1[prop],obj2[prop]))){
            return false
            };
    }
    return true;
}

let obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true