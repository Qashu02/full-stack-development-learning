//  ... this is spread function that used to create the syntax smaller
let arr=[..."hello"];
let ans=arr.map(
    (el)=>{
        return el.toUpperCase();
    }
)
console.log(ans);