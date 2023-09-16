let images=[`https://static.abhibus.com/busgallery/offerbanners/Aug2023/09/1691569099/476X220.webp`,`https://static.abhibus.com/busgallery/offerbanners/Nov2022/30/1669819906/476X220.webp`,`https://static.abhibus.com/busgallery/offerbanners/Dec2022/30/1672393950/476X220.webp`,`https://static.abhibus.com/busgallery/offerbanners/Jul2023/01/1688171061/476X220.webp`,`https://static.abhibus.com/busgallery/offerbanners/Sep2022/15/1663247023/gsrtc_50%_476x220%20copy.webp`,`https://static.abhibus.com/busgallery/offerbanners/May2023/08/1683554003/476X220.webp`,`https://static.abhibus.com/busgallery/offerbanners/May2022/18/1652881214/476-220.jpg`,`https://static.abhibus.com/busgallery/offerbanners/Mar2023/02/1677706835/476X220.webp`,`https://static.abhibus.com/busgallery/offerbanners/Aug2022/06/1659765245/476x220.webp`,`https://static.abhibus.com/busgallery/offerbanners/May2023/01/1682927156/476X220.webp`,`https://static.abhibus.com/busgallery/offerbanners/Aug2023/01/1690836136/476X220.webp`,`https://static.abhibus.com/busgallery/offerbanners/Apr2023/06/1680775905/476x220.webp`,`https://static.abhibus.com/busgallery/offerbanners/Jun2023/13/1686655495/476X220.webp`]

let slider=document.getElementById("slider");
let image=document.createElement("img");
    
    image.setAttribute("class","iiii")
    image.src=images[0];
  
let image2=document.createElement("img");
    image2.setAttribute("class","iiii")
    image2.src=images[1];   

let image3=document.createElement("img");
    image3.setAttribute("class","iiii")
    image3.src=images[2]; 
    slider.append(image,image2,image3)


let i=1;

let setint=setInterval(mycarouseal,2000);
function mycarouseal(){
    slider.innerHTML="";
    if(i>images.length)
    {
     i=0
    }  
    console.log(i)
 let image=document.createElement("img");
    image.setAttribute("class","iiii")
    image.src=images[i++];

    if(i>images.length)
    {
     i=0
    }
    console.log(i);
let image2=document.createElement("img");
    image2.setAttribute("class","iiii")
    image2.src=images[i++];   
    if(i>images.length)
    {
     i=0
    }
    console.log(i);
   
    let image3=document.createElement("img");
    image3.setAttribute("class","iiii")
    image3.src=images[i++]; 
    if(i>images.length)
    {
     i=0
    }
    console.log(i);
    i=i-2;
    if(i<0)
    {
     i=0
    }
   slider.append(image,image2,image3)
   
}
function buttonoperated(i){
    slider.innerHTML="";
    if(i>=images.length)
    {
     i=0
    }  
    console.log(i)
 let image=document.createElement("img");
    image.setAttribute("class","iiii")
    image.src=images[i++];

    if(i>=images.length)
    {
     i=0
    }
    console.log(i);
let image2=document.createElement("img");
    image2.setAttribute("class","iiii")
    image2.src=images[i++];   
    if(i>=images.length)
    {
     i=0
    }
    console.log(i);
   
    let image3=document.createElement("img");
    image3.setAttribute("class","iiii")
    image3.src=images[i++]; 
    if(i>=images.length)
    {
     i=0
    }
    console.log(i);
    i=i-2;
    if(i<0)
    {
     i=0
    }
   slider.append(image,image2,image3)
   console.log("++++++++++++++++++++++++++++++++")
}


function prev(){
 

    clearInterval(setint)
    i++
    if(i>=images.length)
    {
     i=0
    }
    buttonoperated(i)
}

function next(){
    
    clearInterval(setint)
    i--
    if(i<0)
    {
     i=images.length-1
    }
    

    buttonoperated(i)
}
 
//////////////////////////////////

let photo=[`https://static.abhibus.com//content-pages/op-logos/apsrtc.png`,`https://static.abhibus.com//content-pages/op-logos/tsrtc.png`,`https://static.abhibus.com//content-pages/op-logos/Kerala-RTC.png`,`https://static.abhibus.com//content-pages/op-logos/msrtc.png`,`https://static.abhibus.com//content-pages/op-logos/gsrtc.png`,`https://static.abhibus.com/img/operator/hrtc-logo.png`,`https://static.abhibus.com//content-pages/op-logos/RSRTC.png`,`https://static.abhibus.com//content-pages/op-logos/Pepsu-prtc.png`,`https://static.abhibus.com//content-pages/op-logos/BSRTC.png`,`https://static.abhibus.com//content-pages/op-logos/UPSRTC.png`,`https://static.abhibus.com//content-pages/op-logos/osrtc.png`]

let slide=document.getElementById("slide");
let imagess=document.createElement("img");
    
    imagess.setAttribute("class","iii")
    imagess.src=photo[0];
    
  
let imagess2=document.createElement("img");
    imagess2.setAttribute("class","iii")
    imagess2.src=photo[1];   

let imagess3=document.createElement("img");
    imagess3.setAttribute("class","iii")
    imagess3.src=photo[2]; 

let imagess4=document.createElement("img");
    imagess4.setAttribute("class","iii")
    imagess4.src=photo[3]; 

let imagess5=document.createElement("img");
    imagess5.setAttribute("class","iii")
    imagess5.src=photo[4];

let imagess6=document.createElement("img");
    imagess6.setAttribute("class","iii")
    imagess6.src=photo[5]; 

let imagess7=document.createElement("img");
    imagess7.setAttribute("class","iii")
    imagess7.src=photo[6]; 
    
    

    slide.append(imagess,imagess2,imagess3,imagess4,imagess4,imagess5,imagess6,imagess7)


 i=1;

let setint1=setInterval(carouseal,2000);
function carouseal(){
    slide.innerHTML="";
    if(i>photo.length)
    {
     i=0
    }  
    console.log(i)
 let imagess=document.createElement("img");
    imagess.setAttribute("class","iii")
    imagess.src=photo[i++];

    if(i>photo.length)
    {
     i=0
    }
    console.log(i);
let imagess2=document.createElement("img");
    imagess2.setAttribute("class","iii")
    imagess2.src=photo[i++];   
    if(i>photo.length)
    {
     i=0
    }
    console.log(i);
   
    let imagess3=document.createElement("img");
    imagess3.setAttribute("class","iii")
    imagess3.src=photo[i++]; 
    if(i>photo.length)
    {
     i=0
    }
    console.log(i);
    let imagess4=document.createElement("img");
    imagess4.setAttribute("class","iii")
    imagess4.src=photo[i++]; 
    if(i>photo.length)
    {
     i=0
    }
    console.log(i);
    let imagess5=document.createElement("img");
    imagess5.setAttribute("class","iii")
    imagess5.src=photo[i++]; 
    if(i>photo.length)
    {
     i=0
    }
    console.log(i);
    let imagess6=document.createElement("img");
    imagess6.setAttribute("class","iii")
    imagess6.src=photo[i++]; 
    if(i>photo.length)
    {
     i=0
    }
    console.log(i);
    let imagess7=document.createElement("img");
    imagess7.setAttribute("class","iii")
    imagess7.src=photo[i++]; 
    if(i>photo.length)
    {
     i=0
    }
    console.log(i);
    i=i-6;
    if(i<0)
    {
     i=0
    }
   slide.append(imagess,imagess2,imagess3,imagess4,imagess4,imagess5,imagess6,imagess7)
   
}
function lowerbuttonoperated(i){
    slide.innerHTML="";
    if(i>=photo.length)
    {
     i=0
    }  
    console.log(i)
 let imagess=document.createElement("img");
    imagess.setAttribute("class","iii")
    imagess.src=photo[i++];

    if(i>=photo.length)
    {
     i=0
    }
    console.log(i);
let imagess2=document.createElement("img");
    imagess2.setAttribute("class","iii")
    imagess2.src=photo[i++];   
    if(i>=photo.length)
    {
     i=0
    }
    console.log(i);
   
    let imagess3=document.createElement("img");
    imagess3.setAttribute("class","iii")
    imagess3.src=photo[i++]; 
    if(i>=photo.length)
    {
     i=0
    }
    console.log(i);
    let imagess4=document.createElement("img");
    imagess4.setAttribute("class","iii")
    imagess4.src=photo[i++]; 
    if(i>=photo.length)
    {
     i=0
    }
    console.log(i);
    let imagess5=document.createElement("img");
    imagess5.setAttribute("class","iii")
    imagess5.src=photo[i++]; 
    if(i>=photo.length)
    {
     i=0
    }
    console.log(i);
    let imagess6=document.createElement("img");
    imagess6.setAttribute("class","iii")
    imagess6.src=photo[i++]; 
    if(i>=photo.length)
    {
     i=0
    }
    console.log(i);
    let imagess7=document.createElement("img");
    imagess7.setAttribute("class","iii")
    imagess7.src=photo[i++]; 
    if(i>=photo.length)
    {
     i=0
    }
    console.log(i);
    
    
    

    i=i-6;
    if(i<0)
    {
     i=0
    }
   slide.append(imagess,imagess2,imagess3,imagess4,imagess4,imagess5,imagess6,imagess7)
   console.log("++++++++++++++++++++++++++++++++++++++++++")
}


function lowerpre(){
 

    clearInterval(setint1)
    i++
    if(i>=photo.length)
    {
     i=0
    }
    lowerbuttonoperated(i)
}

function lowernex(){
    
    clearInterval(setint1)
    i--
    if(i<0)
    {
     i=photo.length-1
    }
    

    lowerbuttonoperated(i)
}
////////////////////////////////////////////////////////////////