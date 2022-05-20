/*


https://www.codewars.com/kata/5583d268479559400d000064/train/javascript

Binary to Text (ASCII) Conversion
6 kyu





*/
function binaryToString(binary){
let arr=[];
  for (let i=0;i<binary.length;i+=8){
  arr.push(binary.slice(i,i+8))
  }
  return arr.map(v=>String.fromCharCode(parseInt(v,2))).join('')
}



