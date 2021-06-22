/*
    Define a recursive function isEven to determine whether a number is completely divisible by 2.
    The function should accept a single parameter (a positive, anegative or whole number) and return a Boolean.
*/

function isEven(num){
    if(num < 0) {
        num = num * (-1);
    }
    if(num === 0){
        return true;
    }
    if(num === 1){
        return false;
    }
    else{
      num = num-2;
      return isEven(num);  
    } 
}