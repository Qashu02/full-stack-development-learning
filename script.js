// checking element is multiple of 10 or not

let arr=[10,240,204540,250]
// every method used to check the all condition is full filled in an array if yes give true, same as AND operator and Some function is opposite to it 
let ans=arr.every((el)=>{    
    return el%10==0;
});
console.log(ans)