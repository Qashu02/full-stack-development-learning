let arr=[ "ali", "saad" ,"usama"];
//  destructuring is used when we want to create multiple variable and assign the balue to in it 
// spread is used to take the copy of the data and store in new array 
let [name1,...name2]=arr;
console.log(name1);
console.log(name2);