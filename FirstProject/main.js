window.onscroll = function() {
    myFunction();
}
let navbar = document.querySelector("#nav");
let sticky = navbar.offsetTop;

let myFunction = () => {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky");

    } else {
        navbar.classList.remove("sticky");

    }
}