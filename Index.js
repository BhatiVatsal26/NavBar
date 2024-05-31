const bar = document.getElementById("bar");
const croos = document.getElementById("croos");
const navulR = document.getElementById("navulR");
const logores = document.getElementById("logores");

bar.onclick = function(){
    croos.style.display = "block";
    bar.style.display = "none";
    navulR.style.display = "block";
    logores.style.display = "none";
    navulR.style.transform = "translateX(0px)";
    navulR.style.animationName = "responsivenav";
}
croos.onclick = function(){
    navulR.style.animationName = "responsivenavsecond";
    setTimeout(() => {
    navulR.style.transform = "translateX(0px)";
    croos.style.display = "none";
    bar.style.display = "block";
    navulR.style.display = "none";
    logores.style.display = "block";
    }, 1000);
    setTimeout(() => {
    navulR.style.transform = "translateX(360px)";
    }, 1000);
}
