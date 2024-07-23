let btn =document.querySelector("button");
let ul=document.querySelector("ul");
btn.addEventListener('click', function(){
    let input=document.querySelector("input");
   let item=document.createElement("li");
   
let del=document.createElement("button");


   item.innerText=input.value;
del.innerText="Delete";
del.classList.add("delete");
item.append(del);


   ul.appendChild(item);
   input.value="";

})
// event Delegation is used when bubbling is held to parent when triggered
// bubling is the concept that if the event listener is addes to the parent then it will also bre on child 
ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let lists=event.target.parentElement;
        lists.remove()
    }
})