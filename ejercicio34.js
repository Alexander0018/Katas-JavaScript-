/*


https://www.codewars.com/kata/586538146b56991861000293/train/javascript

if you can read this
6 kyu

*/ 

function to_nato(words) {
    return words.replace(/\s/g, '').toLowerCase().split('').map(e => NATO[e] ? NATO[e] : e).join(' ');
    }