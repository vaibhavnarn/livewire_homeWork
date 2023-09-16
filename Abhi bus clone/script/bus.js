import navbar from "../component/navbar.js";
let stored=document.getElementById("root");
stored.innerHTML=navbar();


let bhai=document.getElementById("sform");
bhai.addEventListener("submit",getdata)

async function getdata()
{
event.preventDefault()
let entry=document.getElementById("sform");
let bus=entry.eemail.value;
let name=entry.fname.value;
let pass=entry.agee.value;
let age=entry.lname.value;
let email=entry.mail.value;
let number=entry.numb.value;
let type=entry.typet.value

let obj={

 bus,
 name,
 pass,
 age,
 email,
 number,
 type
}

 await fetch(`     http://localhost:3000/entry`,{
    method:"POST",
    body:JSON.stringify(obj),
    headers:{
   "Content-Type":"application/json"
    }


})
}
let bhai1=document.getElementById("form");
bhai1.addEventListener("submit",updatedata)


async function updatedata()
{
event.preventDefault()
let entry=document.getElementById("forms");
let id=entry.idd.value
let bus=entry.eemail.value;
let name=entry.fname.value;
let pass=entry.agee.value;
let age=entry.lname.value;
let email=entry.mail.value;
let number=entry.numb.value;
let type=entry.typet.value
let obj={
 id,
 bus,
 name,
 pass,
 age,
 email,
 number,
 type
}

 await fetch(` http://localhost:3000/entry/${id}`,{
    method:"PATCH",
    body:JSON.stringify(obj),
    headers:{
   "Content-Type":"application/json"
    }


})
}

let bhai2=document.getElementById("bns");
bhai2.addEventListener("click",deletedata)


async function deletedata(){


    let delid=document.getElementById("deleteid").value;
 
    await fetch(`http://localhost:3000/entry/${delid}`,{
       method:"DELETE",
     
   })
 }