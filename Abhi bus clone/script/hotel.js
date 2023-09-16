import navbar from "../component/navbar.js";
let stor=document.getElementById("flex");
stor.innerHTML=navbar();


let bhai3=document.getElementById("forms");
bhai3.addEventListener("submit",getdata)

async function getdata()
{
event.preventDefault()
let hotelentry=document.getElementById("forms");
let hotelname=hotelentry.eemail.value;
let namme=hotelentry.fnam.value;
let passs=hotelentry.agee.value;
let member=hotelentry.lnam.value;
let idproof=hotelentry.mail.value;
let age=hotelentry.numb.value;
let ttypet=hotelentry.typett.value;
let gmail=hotelentry.gmai.value;
let nummbbr=hotelentry.bbr.value
let obj={

 hotelname,
 namme,
 passs,
 member,
 idproof,
 age,
 ttypet,
 gmail,
 nummbbr
}
console.log(obj)

 await fetch(` http://localhost:3000/hotelentry`,{
    method:"POST",
    body:JSON.stringify(obj),
    headers:{
   "Content-Type":"application/json"
    }


})
}
let bhai4=document.getElementById("formss");
bhai4.addEventListener("submit",updatedata)


async function updatedata()
{
event.preventDefault()
let hotelentry=document.getElementById("formss");
let id=hotelentry.idd.value
let hotelname=hotelentry.eemail.value;
let namme=hotelentry.fnam.value;
let passs=hotelentry.agee.value;
let member=hotelentry.lnam.value;
let idproof=hotelentry.mail.value;
let age=hotelentry.numb.value;
let ttypet=hotelentry.typett.value;
let gmail=hotelentry.gmai.value;
let nummbbr=hotelentry.bbr.value
let obj={
 id,
 hotelname,
 namme,
 passs,
 member,
 idproof,
 age,
 ttypet,
 gmail,
 nummbbr
}

 await fetch(`   http://localhost:3000/hotelentry/${id}`,{
    method:"PATCH",
    body:JSON.stringify(obj),
    headers:{
   "Content-Type":"application/json"
    }


})
}

let bhai5=document.getElementById("bns");
bhai5.addEventListener("click",deletedata)


async function deletedata(){


    let delid=document.getElementById("deleteid").value;
 
    await fetch(`  http://localhost:3000/hotelentry/${delid}`,{
       method:"DELETE",
     
   })
 }