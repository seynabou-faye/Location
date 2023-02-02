let MenuBtn = document.querySelector("#MenuBtn");
let Navbar =  document.querySelector(".navbar");



MenuBtn.onlick = () => {
    MenuBtn.classList.toggle("fa-times");
    Navbar.classList.toggle("active");

};