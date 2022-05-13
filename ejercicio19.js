/*


https://www.codewars.com/kata/588e0f11b7b4a5b373000041/train/javascript

Temperature analysis

7 kyu


*/

function lowestTemp(t) {
    return t.length>0? Math.min(...t.split(' ').map(Number)):null; 
   }