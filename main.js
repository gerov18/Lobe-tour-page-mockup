let navButton = document.querySelector('.nav-button');
let nav = document.querySelector('nav');
let headerContainer = document.querySelector('.header-container');
let headerPos = headerContainer.getBoundingClientRect().top;
let sticky = headerContainer.offsetTop;

navButton.addEventListener('click', toggleNav)
function toggleNav(){
    navButton.classList.toggle('nav-button-clicked');
    nav.classList.toggle('nav-active');
}

