// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


let oldScrollY = 0;
if (document.querySelector('header.header')) {
   let header = document.querySelector('header.header');
   
   window.addEventListener('scroll', function(){
      let scrolled = scrollY || document.documentElement.scrollTop;
      let dY = scrolled - oldScrollY;
   
      if (window.scrollY === 0 && window.scrollY < 200) {
         header.classList.remove('header-fixed');
      } else {
         header.classList.add('header-fixed');
      }
   
      if ( dY < 0 ){
         header.classList.add('header-top-fixed');
      } else {
         header.classList.remove('header-top-fixed');
         if (document.querySelectorAll('.menu__item.active').length > 0) {
            removeClasses(document.querySelectorAll('.menu__item.active'), 'active');
            removeClasses(document.querySelectorAll('.menu__sub-item.active'), 'active');
         }
      }
   
      oldScrollY = scrolled;
   });
}

document.querySelector('._scroll').addEventListener('click', event => {
   event.preventDefault();
   window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
   });
})

function removeClasses(array, name) {
   array.forEach(elem => {
      elem.classList.remove(name);
   })
}

const menuLinks = document.querySelectorAll('.menu__link')
const itemActive = document.getElementsByClassName('menu__item active');
const menuSubLinks = document.querySelectorAll('.menu__item > ul > li > a');
const menuSubButtonActive = document.getElementsByClassName('menu__sub-item active');

if (window.innerWidth > 992 && isMobile.any()) {
   const menu = document.querySelectorAll('.menu__body');
   if (menu.length) {
      menu.forEach(menu => {
         const links = menu.querySelectorAll('a');
         links.forEach(link => {
            link.addEventListener('click', event => {
               if (link.classList.contains('clicked') || (!link.classList.contains('has-child') && !link.classList.contains('menu__link'))) {
                  document.location.href = link.getAttribute('href');
               } else {
                  event.preventDefault();
                  link.classList.add('clicked');
               }
            })
         })
      })
   }
   document.addEventListener('click', event => {
      let target = event.target;
      if (target.closest('.menu__link')) {
         if (target.nextElementSibling) {
            event.preventDefault();
         }
         let currentActive = itemActive[0];
         if (currentActive) {
            currentActive.classList.remove("active");
         }
         if (currentActive !== target.closest('.menu__item') && target.nextElementSibling) {
            target.closest('.menu__item').classList.add("active");
         }

      } else if (!(target.closest('.menu__button') || target.closest('.menu__sub-list'))  && document.querySelectorAll('.menu__item.active').length > 0) {
         removeClasses(document.querySelectorAll('.menu__item.active'), 'active');
         removeClasses(document.querySelectorAll('.menu__sub-item.active'), 'active');
         if (menu.length) {
            menu.forEach(menu => {
               const links = menu.querySelectorAll('a');
               links.forEach(link => {
                  link.classList.remove('clicked');
               })
            })
         }
      }
      if (target.closest('.menu__sub-link.has-child')) {
         event.preventDefault();
         let currentActive = menuSubButtonActive[0];
         if (currentActive) {
            currentActive.classList.remove("active");
         }
         if (currentActive !== target.closest('li')) {
            target.closest('li').classList.add("active");
         }
      }
   })
}