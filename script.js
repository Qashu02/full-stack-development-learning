//  async function is the better way to make the program asynchronus it returns by default a promise
//  either its reject or resolve 

function GenerateNum (delay){
return new Promise((resolve, reject )=>{
  setTimeout(() => {
    let num =  Math.floor(Math.random()*10)+1;
    console.log(num);
    if(num<5){
      console.log("No traffic");
      resolve();
    }else{
      console.log("high traffic")
      reject();
    }
  }, delay);
})
}
// await funcrion is used in the async it block the surrounding function to execute vefore the existing one executed
   async function TrafficController(){
//  error handling through Try and catch in asysnc function 
try{

    await GenerateNum(1000);
    await GenerateNum(1000);
     GenerateNum(1000);
}catch{
    console.log("error occur")
}
   }

   TrafficController();

