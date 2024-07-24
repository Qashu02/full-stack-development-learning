let url ="https://catfact.ninja/fact";

// api fetching  with help of promises

fetch(url)
.then((res)=>{
 
  return res.json();
}).then((data)=>{
  console.log(data.fact);
  return fetch(url)
  .then((res)=>{
    return res.json();

  }).then((data2)=>{
    console.log(data2.fact);
  })
}).catch((fail)=>{
  console.log("Error-",fail);
})