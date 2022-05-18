/*

https://www.codewars.com/kata/52ea928a1ef5cfec800003ee/train/javascript
IPv4 to int32

6 kyu






*/ 

function ipToInt32(ip){
    return ip.split(".").reduce(function(int,v){ return int*256 + +v } )
 }