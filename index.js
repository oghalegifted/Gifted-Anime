
document.querySelector(".light").addEventListener("click", light);
document.querySelector(".dark").addEventListener("click", dark);
    
function light() {
    document.querySelector("body").classList.add("new");
    document.querySelector("h1").classList.add("new-color");
    document.querySelectorAll("button")[5].classList.remove("btn-light");
    document.querySelectorAll("button")[5].classList.add("btn-dark");
    lightH2();
    
}

function lightH2() {
    document.querySelectorAll("h2")[0].classList.add("new-color");
    document.querySelectorAll("h2")[1].classList.add("new-color");
    document.querySelectorAll("h2")[2].classList.add("new-color");
}

function dark() {
    document.querySelector("body").classList.remove("new");
    document.querySelector("h1").classList.remove("new-color");
    document.querySelectorAll("button")[5].classList.remove("btn-dark");
    document.querySelectorAll("button")[5].classList.add("btn-light");
    lightH2r();
}

function lightH2r() {
    document.querySelectorAll("h2")[0].classList.remove("new-color");
    document.querySelectorAll("h2")[1].classList.remove("new-color");
    document.querySelectorAll("h2")[2].classList.remove("new-color");
}