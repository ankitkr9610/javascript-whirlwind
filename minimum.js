/*
    Write a function min that takes two arguments and returns their minimum.
    Checks whether the input is number or not
    and returns the lower of the two number
*/
function min(num1, num2){
    if(isNaN(num1) || isNaN(num2)){
        return "Input is not a number";
    }
    else{
        if(num1 < num2){
          return num1;  
        } 
        else{
          return num2;
        }
    }
}
