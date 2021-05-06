//1

/*document.write("          .Задание 1      //     ");
let arr1 = [1, 2, 3, 4, 5];
for(let i=0; i<arr1.length; i++) {
    document.write(arr1[i] + "<br>")
}

//2

document.write("            .Задание 2      //     "+"<br>");
let arr2 = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];
for(let i=0; i<arr2.length; i++) {
    if(arr2[i]>-10 && arr2[i]<-3) {
        document.write(arr2[i]+";");
    }
}

//3

document.write('<br>' + "            .Задание 3      //     " );
let arr3 = [];
for(let i=23; i<=57; i++) {
    arr3.push(i);
}
document.write("Первый пункт задания№3:    " +arr3 + "<br>");

let arr31 = [];
let i = 23;
while(i<=57) {
    arr31.push(i);
    i++;
}
document.write("второй пункт задания№3 с while:    " +arr31);

document.write("Третий пункт задания№3:    " );

let result=0;
for(let i = 23; i<=57; i++) {
    result+=i;
}
document.write("Result:    " +result);

//4
document.write('<br>' + "            .Задание 4      //     " );
let arr4 = ['10', '20', '30', '50', '235', '3000'];
for(i=0; i<arr4.length; i++) {
    if(arr4[i][0]=="1" || arr4[i][0]=="2" ||arr4[i][0]=="5") {
        document.write(arr4[i]+"<br>");
    }
}

//5
document.write('<br>' + "            .Задание 5      //     " );
let week = ['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'];
for(i=0; i<week.length; i++) {
    if((week[i] == '  СБ  ') || (week[i] == 'ВС'))
{ document.write('<br>' + week[i] + '<br>')} 
else {document.write(week[i]+ '<br>' + '<br>')};
}

//6
let = arr5 = ["15", "World", "true", "23", "open"];
console.log(arr5.length);
arr5.push('Orange');
console.log(arr5);
console.log(arr5[arr5.length-1]);

//7
let arr7User=[];
let num1;

while(true) {
num1=+prompt("Введите число к заданию 7");
if(num1==0) { break;
}
arr7User.push(num1);
}
console.log(arr7User);

arr7User.sort(function (a,b) {
    return a-b;
})
console.log(" Чiсла sorted     " +arr7User);

//8
let arr8 = [12, false, 'Текст', 4, 2, -5, 0];
let arr82 = [];
for (i=0; i<arr8.length; i++) {
    arr82.unshift(arr8[i]);
}
console.log(arr82);*/

//9
let arr9 = [5, 9, 21, , , ,  , 9, 78, , , , 6],
numb = 0;
for(i=0; i<arr9; i++) {
    if((arr9[i] !==undefined)) {continue;
}
numb++;
}
console.log(arr9);
console.log(`Колво пустых элементов ${numb}`);

//10
/*let arr10 = [1,8,0,13,76,8,7,0,22,0,2,3,2];
sum = 0;
firstZero = arr10.indexOf(0);
lastZero = arr10.lastIndexOf(0);
if(firstZero!=lastZero) {
    for(i=firstZero; i<lastZero; i++) {
        sum+=arr10[i];
    }
    
}
console.log(sum);


/*let countStar = 8, i;
let str = "";


for (i=1; i<=countStar; i++) {  //от 1 до 8
    let j = countStar - i;  //7
    let z = i;
  
    while (j !== 0) { 
        str+=" ";
        j--;
    }
    while (z !== 0) { 
        str+="^ "; 
        z--;
    }
    str+="\n";
}
console.log(str);*/