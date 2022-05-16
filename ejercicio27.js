/*




https://www.codewars.com/kata/558710234f02dcc4a8000005/train/javascript
7 kyu



*/


function myFunction() {
    var myObject = {
       objProperty: "string",
       objMethod: function objMethod() {
         return myObject.objProperty;
       }
     }
     
     return myObject;
   };