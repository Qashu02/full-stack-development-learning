// Random Rgb generator app 
let btn=document.querySelector("button");
let h3=document.querySelector("h3");
let div=document.querySelector("div");

Randomcolor=()=>{
    let red=Math.floor(Math.random()*255);
    let Green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red} , ${Green}, ${blue})`;
    return color;
}
btn.addEventListener('click',function(){
    let random=Randomcolor();
    h3.innerText=random;
    h3.style.color=random;
    div.style.backgroundColor=random;
})

  