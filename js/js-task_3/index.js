/*let i = 0;
while(i<=50) {
    console.log(i);
    i++;
}

for(let a = 35; a >=8; a--) {
    console.log(a);
}

let c = 89;
while(c>=11) {
    document.write(c + "</br>");
    c--;
}


let b, sum=0;
for(b=1; b<=100; b++) {
    sum=sum+b;
   
}
console.log(sum);

sum1 = 0;
for(b=1; b<=5; b++) {
    sum1+=b;
    console.log("Сумма в числе " +b+  "равна " +sum1);
}*/

/*for(d=8; d<=56; d++) {
    if(d % 2 == 0) 
    console.log(d);
}
let d1 = 8;
while(d1<=56) {
    document.write(d1+"<br>")
    d1+=2;
}*/

/*let k = 2, j = 1, result;
while(j<=10) {
   result = k * j;
    console.log(k +"*" +j+ "=" +result);
    j++;
}
for(k=1; k <=10; k++) {
    for(j=1; j<=10; j++) {
        console.log(k + "*"  +j+ "=" +(k*j));
    }
}*/


/*let n = 1000, num = 0;
while(true) {
if(n>=50) {
    n=n/2;
    num++;
} else { break 
}
}
console.log(n,num);*/

/*let num1, avgNum=0;
sum=0;
i=0;
while(true) {
    num1 = +prompt("Введите число");
    if (isNaN(num1)) {
        alert("Введите число");
    } else if (num1==0) {
        break;
    } else {
        sum+=num1;
        i++;
    }
}
console.log("Sum" + sum + " Averege" + sum/i);*/

/*let str = '4 98 4 6 1 32 4 65 4 3 5 7 89 7 10 1 36 8 57';
let arrStr = str.split(" ");
let max = arrStr[0], min = arrStr[0];
for (i=0; i<arrStr.length; i++) {
    if(arrStr[i]>max) {
        max=arrStr[i]
    }
    if(arrStr[i]<min) {
        min=arrStr[i]
    }
}
console.log(`MAX ${max}, MIN ${min}`);*/

str1 = prompt("Введите число для10 задачи");
sum = 0;
arrStr = str1.split("");
for(i=0; i<arrStr.length; i++) {
    sum +=+arrStr[i];
}
console.log("число:" + str1);
revrs = arrStr.reverse().join("");
console.log("цифр в числе: "+arrStr.length+"Сумма чисел массива: "+sum+"Обратный порядок: "+revrs);

