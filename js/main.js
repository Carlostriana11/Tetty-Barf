let menuToggle = document.querySelector('.menu-toggle');
let menuToggleIcone = document.querySelector('.menu-toggle i');
let menu = document.getElementById('menu');

menuToggle.addEventListener('click', e=>{
    menu.classList.toggle('show');

    if(menu.classList.contains('show')){
        menuToggleIcone.setAttribute('class', 'fa fa-times');
    }else{
        menuToggleIcone.setAttribute('class', 'fa fa-bars');
    }
});