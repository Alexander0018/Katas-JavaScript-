/*

https://www.codewars.com/kata/5298961d9ce954d77b0003a6/train/javascript

the range() function



6 kyu


*/

function range(start=0, end, step=1) {
    if(end === undefined){end = start, start = 0;}
    let range = [];
    let steps = (end - start) / (step || 1);
    for(let i = 0; i < steps; i++) {
      range.push(start)
      start += step;
    }
    return range;
  }
  