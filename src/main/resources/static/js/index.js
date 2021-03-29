const random = (Math.floor(Math.random() * 10) + 1);
const
   a = document.querySelector("#random"),
   h1 =  document.querySelector("h1");
console.log(h1.innerText);
a.innerText += random;
a.href += random;