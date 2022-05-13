/*

https://www.codewars.com/kata/56fe97b3cc08ca00e4000dc9/train/javascript

Coding 3 min: Bug in apple



* */

function sc(apple){
    for (i=0;i<apple.length;i++)
      for (j=0;j<apple[i].length;j++) {
        if (apple[i][j] == "B")
          return [i,j];
       }   
    return null;
  
  }