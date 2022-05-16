/*

https://www.codewars.com/kata/565d6d1696e154b51b000076/train/javascript

7 kyu




*/ 


function semicolonSeparationToCommaSeparation(input) {
    let [a, b, c] = input.split(';');
      return `${a},${b},${c}`; 
  }