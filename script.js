let body=document.querySelector("body");
// create Element is used to create new element using JS
let para=document.createElement("p");
para.innerText="Hi i am red";
para.style.color="red";
// append property used to append the text and also the html tag 
// appendcChild is  used to append in the element position is last
// prepend is used to add the element as the first chlid 
// insertAdjacent(where,element) is usedto insert element in mean position
body.prepend(para);


let h3=document.createElement('h3');
h3.innerText="Hi i am blue";
h3.style.color="blue";
body.prepend(h3);

let div=document.createElement("div");
div.style.border="black";
div.style.backgroundColor="pink";
body.append(div);

let h1=document.createElement("h1");
h1.innerText="hello i am in a div";
div.append(h1);

let para2=document.createElement("p");
para2.innerText="me too";
div.append(para2);