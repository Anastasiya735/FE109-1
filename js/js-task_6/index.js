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

/*let a = 3;
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
abs(3, 5);*/

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
слово до знака @*/
let m = 'test@mail.com';
function getlogin(m) {
    let login = m.substring(0, m.indexOf('@'));
    return login
}
console.log(getlogin(m));

/*let mail = 'test@mail.ru';
let login = mail.substring(0,4);
console.log("login: " + login);*/


/*Дана строка «Я учу javascript!». Вырежете из нее слово «учу» и слово
«javascript» тремя разными способами (через substr, substring, slice).*/

let str4 = "Я учу javascript";
console.log(str4.substring(2,6));
console.log(str4.substr(2,4));
console.log(str4.slice(2,5));

//11kata
/*function gridIndex(grid, indices) {
  let array = grid.flat();
  let getword = indices.map(item => array[item-1]).join('');
  return getword;
}*/


function checkPHnumber(phone) {
    let regexp = /[+]{1}[1-9{3}[][0-9]{2}[][1-6]{1}[1-9]{3}[][1-9]{3}/g;
    return regexp.test(phone);
}
console.log(checkPHnumber('+375 29 6 262 525'));


/*Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
условия:
    - весь адрес не должен содержать русские буквы и спецсимволы, кроме
    одной «собачки», знака подчеркивания, дефиса и точки;
    - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
    имя может содержать только буквы, цифры, но не быть первыми и
    единственными в имени;
    - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
    не может быть длиной менее 2 и более 11 символов.
   
    Функция должна возвращать true или false. Используйте регулярные
    выражения.*/

        /*let mail1 = "nastya_g.f@mail.ru";
        let mailUser = /[a-z0-9][\.\_\-]@[a-z]{2,11}\.[a-z]{2,11}/gi;
        console.log(mailUser.test(mail1));*/
    
    
        /*общее
        - никаких русских символов
        - только "@ - . ", буквы, цифры
        ** символы не идут подряд  «..», «@.», «.@» или «@@», «@», «@-», «--»

    адрес 
        - первая и последняя буква не символы "@ - . _"
        - более 2х символов
        - цифра не на первом месте 

    почтовый сервис после @
        - от 3 до 10 символов

    доменное имя
        - от 2 до 11*/

     

        let cattle = {
            type: 1,
            power: 1500,
            color: 'white',
            price: 155,
            vol: 1.5,
            a: +prompt("ВВедите время работы в часах"),
            energy: function () {

            this.b = (this.a * this.power)/1000;
            },
        
            maxlevvol: function () {
                this.c = this.vol * 0.7; {
                    console.log("Максимальный уровень воды:  " + Math.round(this.c) + " L");
                }

            },

            superprice: function() {
                
                d = +prompt("Введите количество");
                if(d > 3) {
                    return this.pr = 0.8 * d * this.price;
                } else { 
                    return this.pr = d * this.price;
                }
          
            }

        }
        
        let on = confirm("Cattle ON?");
        if(on) {
            console.log("Чайник включён");
        }

           console.log(cattle);
           cattle.energy();
           cattle.maxlevvol();
           cattle.superprice();
                   
             console.log("Потребление энергии за время работы: " + cattle.b + "кВт*ч");
             console.log("Ваша цена:  " + cattle.pr + " deneg");
            
             







        
