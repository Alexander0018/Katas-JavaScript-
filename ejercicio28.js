/*
https://www.codewars.com/kata/54f5c1b000ecc46de6000e4c/train/javascript

Someting's fishy
7 kyu






*/ 


function isTotal3() {
    var simpleVariable = 1;
      
      for (var index = 0; index < 1; index++)
        var variableInLoop = 1;
      
      (function defineAVariable() {
        variableInFunction = 1;
      })();
      
      var result = simpleVariable + variableInLoop + variableInFunction;
      
      return result;
    }