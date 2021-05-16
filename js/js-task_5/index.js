/*function subtr(a, b, c) {
    return (a-b)/c;
}
console.log(subtr(10, 2, 4));

function cub(d) {
    return d*d*d;
}
console.log(cub(5));

function min(a, b) {
    if(a < b)  { 
        return a;
    }
    else {
        return b;
    }
}
console.log(min(3, 4));

function max(a, b) {
    if(a > b) {
        return a;
    } else {
        return b;
    }
}
console.log(max(6, 10));

function array(length) {
    let arr = [];
    length = +prompt("Type numbers");
    for(let i=1; i<=length; i++) {
        arr.push(i)
    }
    return arr;
}
console.log(array());

function isEven(e) {
    if(Number.isInteger(e)==true) {
        if(e % 2 == 0) {
            return true;
        } else {
            return false;
        }
    } else  {
        return(a + 'не целое число');
    }
}
console.log(isEven(10));

function getArray(f) {
    f = Array.from(arguments);
    let result = f.filter(isEven);
    return result;
}
getArray(1, 2, 3, 45, 50);

for (let i = 1; i <= 9; i++) {
    for (let j = 1; j <= i; j++) {
      document.write(' ' + i + ' ');
    }
    document.write('<br>');
  };*/

function printArray(array8) {
    console.log(array8[i]);
    i++;
    if(i < array8.length) printArray(array8);
}
let i = 0;

printArray([2, 3, 34, 7, 76]);

let hour = (new Date()).getHours();
function hello(name) {
    name = prompt("Как Вас зовут?");
    if(hour >=0 && hour < 6) {
        return alert("Good nignt  " + name);
    } else if(hour >=6 && hour < 12) {
       return alert("Good morning  " + name);
    } else if(hour >=12 && hour < 18) {
       return alert("Good afternoon  " + name);
    } else {
        return alert("Good evening  " + name);
    }
}
hello();