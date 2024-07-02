const toggler = document.querySelector('.style-switcher-toggler');
toggler.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})

//hide style switcher on scroll

window.addEventListener("scroll",()=>{
    if( document.querySelector(".style-switcher").classList.contains("open")){
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

//theme color

const styles= document.querySelectorAll(".alternate-style");
function setActiveStyle(color){
    styles.forEach((style)=>{
        if(color===style.getAttribute("title")){
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");   
        }
    })
}

//theme background light and dark mode
const daynight= document.querySelector(".day-night");
daynight.addEventListener("click",()=>{
    daynight.querySelector("i").classList.toggle("bxs-sun");
    daynight.querySelector("i").classList.toggle("bxs-moon");
    document.body.classList.toggle("dark");
})

window.addEventListener("load",()=>{
    if( document.body.classList.contains("dark")){
        daynight.querySelector("i").classList.add("bxs-sun");
    }
    else{
        daynight.querySelector("i").classList.add("bxs-moon");
    }
})

// var type= new typed(".typing",{
//     strings:["Web Devloper","Web Designer","Font End Developer"],
//     typeSpeed:100,
//     BackSpeed:60,
//     loop: true
// });

const menubtn=document.querySelector('.nav-toggler');
menubtn.addEventListener('click',()=>{
    const disp=document.querySelector(".aside");
    if(disp.style.left==="0px"){
        disp.style.left="-270px";
        disp.style.trasnition="all 1s ease";
    }
    else{
        disp.style.left="0px";
        disp.style.transition="all 1s ease";
    }
})

// if(menubtn.style.display==="block"){
//     window.addEventListener('scroll',()=>{
//         const disp=document.querySelector(".aside");
//         if(disp.style.left="0px"){
//             disp.style.left="-270px";
//             disp.style.transition="all 1s ease";
//         }
//     })
// }
