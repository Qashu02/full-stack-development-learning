// Create a new input and button element on the page using JavaScript only. Set the
// text of button to "Click me'
let body=document.querySelector("body");

let btn=document.createElement("button");
let input=document.createElement("input");
body.prepend(input);

btn.innerText="CLick me";
body.append(btn)

// Qs2. Add following attributes to the element :
// Change placeholder value of input to "username"
// // Change the id of button to "btn'

btn.setAttribute("id","btn");
input.setAttribute("placeholder","username");

// Qs3. Access the btn using the querySelector and button id. Change the button background
// color to blue and text color to white.

let btn_id=document.querySelector("#btn");

btn_id.style.color="purple"

// Qs4. Create an hl element on the page and set its text to "DOM Practice" underlined.
// Change its color to purple.

let h1=document.createElement("h1");
h1.innerText="Dom Pratice";
h1.style.color="purple"
body.prepend(h1);

p=document.createElement("p");
p.innerText="Hard work";
p.style.color="red";
body.append(p);