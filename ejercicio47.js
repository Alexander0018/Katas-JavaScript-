/*

https://www.codewars.com/kata/5a057ec846d843c81a0000ad/train/javascript

1/n cycle

6 kyu



*/

function cycle(n) {
    if (n%2 == 0 || n%5 == 0) {
        return -1
      } else {
        let res = 10 % n, c = 1;
        while (res != 1) 
        {
            res = res * 10 % n; 
            c++;
        }
        return c;
        }
    }