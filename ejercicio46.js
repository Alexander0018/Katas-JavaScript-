/*

https://www.codewars.com/kata/54834b3559e638b39d0009a2/train/javascript
this is an other solution

 6 kyu




*/

function OnceNamedOne(first, last) {
    // -- SHOULD be changed --
        this.firstName = first;
        this.lastName = last;
        this.fullName = this.firstName + ' ' + this.lastName;
      Object.freeze(this)
    }