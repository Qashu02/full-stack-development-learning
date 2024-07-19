//  function that print hello world 5 times in 2 sec interval

let id=setInterval(function(){
    console.log("Hello world")
},2000);

setTimeout(()=>{
    
    clearInterval(id);
    console.log("5 Times completed")
},10000);