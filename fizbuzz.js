/*
    % is a costly operator, hence to avoid that for 15, 
    we have utilized the checks done earlier and concatinating
    the strings to make FizzBuzz 
*/


function fizbuzz(){
    for (let i=1; i<=100; i++){

        let output = "";
        if(i%3 == 0) output+="Fizz";
        if(i%5 == 0) output+="Buzz";
    
        if(output === "") output = i;
        
        console.log(output);
    }
}

fizbuzz();

