// Square and sum the array elements using the arrow function and then find the average of the array.
let arr=[12,4,42,44,6];
//  map function used to map the array and create new array and store data of existing array after funtions
let square=arr.map((el)=>
{
return el*el;
})
console.log(square);
let sum= arr.reduce((res,el)=>{
    return res+el;
});
console.log(sum);

 let avg= sum/arr.length;
 console.log(avg);