'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



function main() {
    const N = parseInt(readLine().trim(), 10);
    
    const even = (N % 2 === 0);
   
    if(!even){
          console.log("Weird");
    }else if(even && (2 <= N && N <= 5)){
         console.log("Not Weird");
    }else if(even && (6 <= N && N <= 20)){
         console.log("Weird");
    }else if(even && (N>20)){
         console.log("Not Weird");
    }
}
