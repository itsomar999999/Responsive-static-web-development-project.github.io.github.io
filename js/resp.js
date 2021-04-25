burger=document.querySelector('.burger')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.nav-list')
rightnav=document.querySelector('.rightnav')

burger.addEventListener('click',()=>{
    rightnav.classList.toggle('vclassresp');
    navlist.classList.toggle('vclassresp');
    navbar.classList.toggle('navheightresp');

})
