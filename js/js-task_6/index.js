let str = 'aaa@bbb@ccc';
console.log(str.replace(/@/g, '!'));

// Дан массив с элементами 4, 2, 5, 19, 13, 0, 10. Найдите квадратный корень из суммы кубов его элементов. Для решения воспользуйтесь циклом for.
/*let sum=0;
arr=[4, 2, 5, 19, 13, 0, 10];
for(let num of arr) {
sum=sum+(num*num*num)
}
console.log(Math.sqrt(sum));*/

let sum2=0;
arr=[4, 2, 5, 19, 13, 0, 10];
for(let num of arr) {
sum2=sum2+Math.pow(num, 3)
}
console.log(Math.sqrt(sum2));

/*Даны переменные a и b. Отнимите от a переменную b и результат
присвойте переменной c. Сделайте так, чтобы в любом случае в переменную
c записалось положительное значение. Проверьте работу скрипта при a и b,
равных соответственно 3 и 5, 6 и 1.*/

let a = 3;
let b = 5;
let с = Math.abs(a-b);
console.log(с);

let a1 = 6;
let b1 = 1;
let с1 = Math.abs(a1-b1);
console.log(с1);

function abs(d,e) {
    let f = Math.abs(d-e);
    alert(f);
}
abs(3, 5);

/*В переменной date лежит дата в формате 2025-12-31. Преобразуйте эту
дату в формат 31/12/2025.*/

let str2 = '2025-12-31';
let arr2 = str2.split('-');
console.log(arr2);
let strnew = arr2[2] + '/' + arr2[1] + '/' + arr2[0];
console.log(strnew);


/*Дана строка 'aa aba abba abbba abca abea'. Напишите регулярку, которая
найдет строки aba, abba, abbba по шаблону: буква 'a', буква 'b' любое
количество раз, буква 'a'.*/

let str3 = 'aa aba abba abbba abca abea';
console.log(str3.replace(/ab+a/g + "!"));

/*Дана почта пользователя test@mail.ru (можно использовать любую)
Написать ф-цию, которая принимает почту и возвращает из нее логин -
слово до знака @
function printlogin(m) {
    return m[0]+m.substring(0,5);
}
let m = 'test@mail.com';*/


let mail = 'test@mail.ru';
let login = mail.substring(0,4);
console.log("login: " + login);


/*Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
«javascript» тремя разными способами (через substr, substring, slice).*/

let str4 = "Я учу javascript";
console.log(str4.substring(2,6));
console.log(str4.substr(2,4));
console.log(str4.slice(2,5));
