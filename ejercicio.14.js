/*


Greet me

https://www.codewars.com/kata/535474308bb336c9980006f2/train/javascript


* */

var greet = function(name) {


  
  
    return "Hello " +  name.trim().toLowerCase().replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase()))) + '!';
}