
/*

https://www.codewars.com/kata/581c867a33b9fe732e000076
Fun with list: lastIndexOF


*/ 





function lastIndexOf(head, value) {
  
    let count = 0, current = head;
    let arr=[]
    while(current !== null) {
      arr.push(current.data)
      current = current.next;
      count++;
    }
    return arr.lastIndexOf(value);
  }