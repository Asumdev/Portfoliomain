var header = document.querySelector("header");
window.addEventListener('scroll', function() { 
header.classList.toggle('sticky', window.scrollY > 100);
});

var menu = document.querySelector('#menu-icon');
var navList = document.querySelector('.navlist');

window.onclick = () => {
    menu.classList.toggle('bx-x');
    navList.classList.add('open');
    
};

window.onscroll =  () => {
    menu.classList.remove('bx-x');
    navList.classList.remove('open');
    
};




if ( navToggle ) {
    navToggle.addEventListener('click', () =>{
        
        navMenu.classList.add('show-menu');
    })
}

if (navClose){
    navClose.addEventListener('click', () =>{
        
        navMenu.classList.remove('show-menu')
    })
}
   
//======================REMOVE MENU==============

var navLink =document.querySelectorAll('.nav__link');

function linkAction(){
    var navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))
