/*
    Write a program that creates a string that represents an 8×8 grid, 
    using newline characters to separate lines. 
    At each position of the grid there is either a space or a "#" character. 
    The characters should form a chessboard.
*/

function chessBoardMaker(size="8"){
    /* 
    Function that input element in the string based on the position is even or odd.
    Takes three params
    size: size of the array
    inputOnEven: character to be input at even places
    inputOnOdd: character to be input at odd places
    */
    function inputOnOddEven(size, inputOnEven, inputOnOdd){
        let output= "";
        for(let i=0; i<size; i++){
            if(i%2 == 0 ){
                output += inputOnEven;
            }
            else{
                output += inputOnOdd;
            }
        }
        return output+"\n";
    }

    let strEven = inputOnOddEven(size, " ", "#");
    //Makes the first row ( # # # #) [for size 8]
    let strOdd = inputOnOddEven(size, "#", " ");
    //Makes the second row (# # # #) [for size 8]
    

    let chessBoard = inputOnOddEven(size, strEven, strOdd);
    //Makes the chessboard by repeating odd and even strings made 
    console.log(chessBoard);
}

chessBoardMaker();

/*
    Simple readle code using nested loops but the complexity is O(size*size) times,
    whereas the above code has complexity of O(size+size+size), 
    which is optimized for board-size greater than 3 
            
    let size = 8;
    let str = ""
    for(let i = 0; i<size; i++){
        for(let j=0; j<size; j++){
            if((i+j) % 2) str+="#";
            else str+=" "
        }
        str+="\n";
    }

    console.log(str);

*/