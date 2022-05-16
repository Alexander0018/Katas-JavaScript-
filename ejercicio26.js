/*

https://www.codewars.com/kata/535d118ccdbf501816001101/train/javascript
7 kyu






*/


/**
 * Function converts array of string to array of integers.
 * @param  {Array} of numbers in form of string
 * @return {Array} of integer numbers 
 */
 var parseNumbers = function(intStrs) {
    return intStrs.map(v=>parseInt(v));
  }