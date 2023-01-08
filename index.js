$(document).ready(main);

const menuOpen = doc.querySelector(".menu");
const menuClose = doc.querySelector(".close");
const overlay = doc.querySelector(".overlay");

function main(){


    //Para que no nos de un error colocamos una exclamacion porque el editor cree que sera null
    menuOpen.addEventListener("click", () => {
      overlay.classList.add("overlay--active");
    });

    menuClose.addEventListener("click", () => {
      overlay.classList.remove("overlay--active");
    });


};