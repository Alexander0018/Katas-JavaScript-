/*

https://www.codewars.com/kata/593b1909e68ff627c9000186/train/javascript

Nickname Generator

7 kyu





*/

function nicknameGenerator(name){

    return name.length<4? 'Error: Name too short' :
    
              /^[a-z]{2}[aeiou]/i.test(name)?
    
              name.slice(0,4) : name.slice(0,3)
    
    
    }