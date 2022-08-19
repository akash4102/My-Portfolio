/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu=document.getElementById('nav-menu'),
      navToggle=document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink=document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('.nav-menu')
    //when we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click',linkAction))

/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
    let itemClass = this.parentNode.className

    for(let i=0;i<skillsContent.length;i++){
        skillsContent[i].className='skills__content skills__close'
    }
    if(itemClass == 'skills__content skills__close'){
        this.parentNode.className = 'skills__content skills__open'
    }
}
skillsHeader.forEach((el) =>{
    el.addEventListener('click',toggleSkills)
})
/*==================== QUALIFICATION TABS ====================*/
const tabs=document.querySelectorAll('[data-target]'),
      tabContents=document.querySelectorAll('[data-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click',()=>{
        const target=document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContents =>{
            tabContents.classList.remove('qualification__active')
        })
        target.classList.add('qualification__active')

        tabs.forEach(tab =>{
            tab.classList.remove('qualification__active')
        })
        tab.classList.add('qualification__active')
    })
})
/*==================== SERVICES MODAL ====================*/
const modalViews=document.querySelectorAll('.services__modal'),
      modalBtns=document.querySelectorAll('.services-button'),
      modalCloses=document.querySelectorAll('.services__modal-close')
    
let modal=function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtns,i) => {
    modalBtns.addEventListener('click',() =>{
        modal(i)
    })
})
modalCloses.forEach((modalCloses)=>{
    modalCloses.addEventListener('click',()=>{
        modalViews.forEach((modalViews)=>{
            modalViews.classList.remove('active-modal')
        })
    })
})
/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio__container", {
    cssMode: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial__container", {
    loop: true,
    grabCursor:true,
    spaceBetween: 48,

    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    breakpoints:{
        568:{
            slidesPerView: 2,
        }
    }
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections=document.querySelectorAll('section[id]')

function scrollActive(){
    const scrolly=window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight=current.offsetHeight
        const section =current.offsetTop-50;
        sectionId=current.getAttribute('id')

        if(scrolly > sectionTop && scrolly <= sectionTop +sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }
        else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',scrollActive)
/*==================== CHANGE BACKGROUND HEADER ====================*/ 
function scrollHeader(){
    const nav= document.getElementById('header')
    //when the scroll is greater than 200 viewport height, add and the scroll-header cl
    if(this.scrolly >= 80) nav.classList.add('scroll-header');
    else nav.classList.remove
}
window.addEventListener('scroll',scrollHeader)

/*==================== SHOW SCROLL UP ====================*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    //when the scroll is higher than 560 viewport, height, and the show scroll class to the tag with the scroll
    if(this.scrolly >=560) scrollUp.classList.add('show-scroll');
    else scrollyUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)
/*==================== DARK LIGHT THEME ====================*/ 
const themeButton=document.getElementById('theme-button')
const darktheme = 'dark-theme'
const iconTheme = 'uil-sun'

//previously selected topic (if user selected)
const selectedTheme=localStorage.getItem('selected-theme')
const selectedIcon=localStorage.getItem('selected-icon')

//we obtain the current theme that the interface has by validating the dark-theme 
const getCurrentTheme = ()=> document.body.classList.contains(darktheme)? 'dark':'light'
const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme) ? 'uil-moon':'uil-sun'

//we validate if the user previously chose a topic
if(selectedTheme){
    //if the validation is fulfilled, we ask what the issue was to know if we acticated
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon==='uil-moon' ? 'add' : 'remove'](iconTheme)
}
//Activate / deactivate the theme manually with the button
themeButton.addEventListener('click',()=>{
    //add or remove the dark/ icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //we save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme',getCurrentTheme())
    localStorage.setItem('selected-icon',getCurrentIcon())
})
// scroll revel animation 
const sr=scrollReveal({
    origin:'top',
    distance: '30px',
    duration: 2000,
    reset:true
});