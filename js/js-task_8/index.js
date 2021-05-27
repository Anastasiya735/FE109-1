let title = document.createElement("title");
title.innerHTML = "New html document";
let metaUtf8 = document.createElement('meta');
metaUtf8.setAttribute('charset', 'UTF-8');
console.log(title);
console.log(metaUtf8);
document.head.appendChild(title);
document.head.appendChild(metaUtf8);

//document.body.style.backgroundColor = "#a840ff";


let p = document.createElement('p');
p.innerHTML = "Studio";
p.classList.add('font_style');
p.style.fontSize = "18px";
p.style.textTransformt = "uppercase";

let h1 = document.createElement('h1');
h1.innerHTML = "Initially designed to";
h1.classList.add('font_style');
h1.style.fontSize = "24px";
h1.style.fontWeight = "bold";
history.style.color = "white";


document.body.appendChild(p);
document.body.appendChild(h1);


