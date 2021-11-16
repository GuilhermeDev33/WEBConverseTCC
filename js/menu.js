const menuMobile = document.querySelector('#menu-mobile');

menuMobile.addEventListener('click',_=>{
    const nav = document.querySelector('nav');
    nav.classList.toggle('active')
})