let $btnMenu = document.getElementById('menu');// select menu;
let $btnClose = document.getElementById('close'); 
let $nav_container = document.querySelector('.nav-container-none');

$btnMenu.addEventListener('click',(e)=>{
    if($nav_container.classList.contains('nav-container-none') === true){
        $nav_container.classList.remove('nav-container-none');
        $nav_container.classList.add('nav-container');
    }

    $btnMenu.style.transform = 'scale(0)';
    $btnClose.style.transform = 'scale(1)';
});

$btnClose.addEventListener('click',(e)=>{
    if($nav_container.classList.contains('nav-container')){
        $nav_container.classList.remove('nav-container');
        $nav_container.classList.add('nav-container-none');
    }
    
    $btnClose.style.transform = 'scale(0)';
    $btnMenu.style.transform = 'scale(1)';

});