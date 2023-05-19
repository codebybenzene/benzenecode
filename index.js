const open=document.getElementById("open");
const close=document.getElementById("close");
const icon=document.getElementsByClassName("temp");


open.addEventListener('click',()=>{
    icon[0].classList.add("toggle");
})

close.addEventListener('click',()=>{
    icon[0].classList.remove("toggle");
})

