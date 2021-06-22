/*
loop that makes seven calls to console.log to output the following triangle:
#
##
###
####
#####
######
#######
*/

function loopATriangle(){
    let symbol = "" 
    for(let i=0 ; i<7 ; i++){
        symbol += "#";
        console.log(symbol);
    }
}

loopATriangle();