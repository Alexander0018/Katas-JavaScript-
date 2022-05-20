/*

numerical palindrome 1.5
 6 kyu

https://www.codewars.com/kata/58e09234ca6895c7b300008c/train/javascript


*/ 
function palindrome(num,s){
if (num!==parseInt(num)||s!==parseInt(s)||s<0||num<0) return 'Not valid'
  const arr = []
  for (let i=num;arr.length!==s;i++){
  if (i.toString()===i.toString().split``.reverse().join``&&i.toString().length>1) arr.push(i)
  }
  return arr
}