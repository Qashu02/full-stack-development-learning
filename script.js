// Promises is an object used to process the request asynschroneosly means that if an action based on first action it 
// reslove the isse . it gives us two state reslove , reject 
// sometimes call back hell occurs which means that we use call back to perform asychroneously but 
//  the code is not understandable so we use promises to reslove the issue and make our program to understand

let h1= document.querySelector("h1");

function ColorChange(color,delay){
    // function will return the promise value
   return new Promise((resolove,rejected)=>{
        setTimeout(()=>{
            h1.style.color=color;
            resolove(`:color changed`);
        },delay);
    });
};

ColorChange("red", 1000)
//  then keyword is used when our promise is successfull what the next function will be executed?
.then((result)=>{
    console.log(`successful to red ${result}`);
    // it also return the new promise that await for the confrmation of the first function to be executed
    return ColorChange("blue",1000);
})
.then((result)=>{
    console.log(`successful to blue ${result}`);
    return ColorChange("green",1000);

}).then((result)=>{
    console.log(`successful to green ${result}`);
})
// if an error occur and failure displayed error then we use to resolve it by catch keyword 
