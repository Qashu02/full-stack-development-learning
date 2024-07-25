let url ="https://catfact.ninja/fact";

// api fetching using axios 
//  in promisies and async we have to parse the data to read it but its automatically converted to dats using axios 
let btn=document.querySelector("button");
let p=document.querySelector("p");

async function GetFact(){
  try{
    
    let res=await axios.get(url);
 btn.addEventListener('click',async function(){
      p.innerText=res.data.fact;

        })
  
  }catch(e){
    console.log("Error-",e);
  }
}

GetFact();

