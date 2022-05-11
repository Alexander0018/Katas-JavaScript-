/*

https://www.codewars.com/kata/5783d8f3202c0e486c001d23/train/javascript

Convert an array of strings to array of numbers
7 kyu




*/

function toNumberArray(stringarray){
  
    var t= JSON.parse("["+ stringarray+"]");
    return t;
  }