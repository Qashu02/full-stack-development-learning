// program to find the largest among three numbers

// take input from the user
const num1 = parseFloat(prompt("Enter first number: "));
const num2 = parseFloat(prompt("Enter second number: "));
const num3 = parseFloat(prompt("Enter third number: "));


// check the condition
if(num1 >= num2 && num1 >= num3) {
 alert("First is largest")
}
else if (num2 >= num1 && num2 >= num3) {
 alert("second is largest");
}
else {
   alert("Third is largest");
}

