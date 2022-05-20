/*
https://www.codewars.com/kata/5ce399e0047a45001c853c2b/train/javascript

sum of parts
6 kyu



*/ 
function partsSums(ls) {
let arr = [0];
  ls.reverse().forEach(v => arr.push(arr[arr.length-1] + v));
  return arr.reverse();
}