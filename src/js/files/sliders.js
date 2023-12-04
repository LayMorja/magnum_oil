/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
// import Swiper, { FreeMode, Mousewheel, Navigation } from 'swiper';
import Swiper from 'swiper';
import { FreeMode, Mousewheel, Navigation } from 'swiper/modules';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay,
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/
// Стили Swiper
// Базовые стили
import '../../scss/base/swiper.scss';
import { isMobile } from './functions.js';
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Инициализация слайдеров
function initSliders() {
  // Перечень слайдеров
  // Проверяем, есть ли слайдер на стронице
  if (document.querySelector('.products__slider')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    let productsSlider = new Swiper('.products__slider', {
      // Указываем скласс нужного слайдера
      modules: [FreeMode, Mousewheel],
      // Подключаем модули слайдера
      // для конкретного случая
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      spaceBetween: 24,
      // autoHeight: true,
      speed: 800,
      freeMode: {
        enabled: true,
      },
      mousewheel: {
        forceToAxis: false,
      },
    });
  }
  if (document.querySelector('.hero-slider__slider')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    let productsSlider = new Swiper('.hero-slider__slider', {
      // Указываем скласс нужного слайдера
      modules: [Navigation],
      // Подключаем модули слайдера
      // для конкретного случая
      preloadImages: false,
      // Enable lazy loading
      observer: true,
      observeParents: true,
      slidesPerView: 1,
      spaceBetween: 20,
      centeredSlides: true,
      // autoHeight: true,
      speed: 800,
      loop: true,
      //touchRatio: 0,
      //simulateTouch: false,
      // loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагинация
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"
      navigation: {
        prevEl: '.hero-slider__arrow-left',
        nextEl: '.hero-slider__arrow-right',
      },

      // Брейкпоинты

      breakpoints: {
        320: {
          slidesPerView: 1.3,
          spaceBetween: 10,
          centeredSlides: false,
        },
        639.98: {
          slidesPerView: 1,
          centeredSlides: true,
        },
        991.98: {
          spaceBetween: 20,
        },
        1365.98: {
          slidesPerView: 1,
        },
      },

      on: {},
    });
  }
  if (document.querySelector('.use__slider')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    let productsSlider = new Swiper('.use__slider', {
      // Указываем скласс нужного слайдера
      modules: [FreeMode, Mousewheel],
      // Подключаем модули слайдера
      // для конкретного случая
      observer: true,
      observeParents: true,
      slidesPerView: 'auto',
      spaceBetween: 20,
      // autoHeight: true,
      speed: 800,
      freeMode: {
        enabled: true,
      },
      mousewheel: {
        forceToAxis: true,
      },
      //touchRatio: 0,
      //simulateTouch: false,
      // loop: true,
      //preloadImages: false,
      //lazy: true,

      /*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

      // Пагинация
      /*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

      // Скроллбар
      /*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

      // Кнопки "влево/вправо"

      // Брейкпоинты

      on: {},
    });
  }
  if (document.querySelector('.warehouse__slider')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    let warehouseSlider = new Swiper('.warehouse__slider', {
      // Указываем скласс нужного слайдера
      modules: [FreeMode, Mousewheel],
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 20,
      speed: 800,
      freeMode: {
        enabled: true,
      },
      mousewheel: {
        forceToAxis: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.3,
          spaceBetween: 10,
        },
        639.98: {
          slidesPerView: 2,
        },
        879.98: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      },
      on: {},
    });
  }
  if (document.querySelector('.sertificates__slider')) {
    // Указываем скласс нужного слайдера
    // Создаем слайдер
    let sertificatesSlider = new Swiper('.sertificates__slider', {
      // Указываем скласс нужного слайдера
      modules: [FreeMode, Mousewheel],
      observer: true,
      observeParents: true,
      slidesPerView: 3,
      spaceBetween: 75,
      speed: 800,
      freeMode: {
        enabled: true,
      },
      mousewheel: {
        forceToAxis: false,
      },
      breakpoints: {
        320: {
          slidesPerView: 1.3,
          spaceBetween: 30,
        },
        639.98: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        879.98: {
          slidesPerView: 3,
          spaceBetween: 75,
        },
      },
      on: {},
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  if (!isMobile.any() && window.innerWidth > 991.98) {
    initSliders();
  } else {
    if (document.querySelector('.hero-slider__slider')) {
      // Создаем слайдер
      let productsSlider = new Swiper('.hero-slider__slider', {
        // Указываем скласс нужного слайдера
        modules: [Navigation],
        // Подключаем модули слайдера
        // для конкретного случая
        preloadImages: false,
        // Enable lazy loading
        observer: true,
        observeParents: true,
        slidesPerView: 1,
        spaceBetween: 20,
        centeredSlides: true,
        // autoHeight: true,
        speed: 800,
        loop: true,
        //touchRatio: 0,
        //simulateTouch: false,
        // loop: true,
        //preloadImages: false,
        //lazy: true,

        /*
            // Эффекты
            effect: 'fade',
            autoplay: {
               delay: 3000,
               disableOnInteraction: false,
            },
            */

        // Пагинация
        /*
            pagination: {
               el: '.swiper-pagination',
               clickable: true,
            },
            */

        // Скроллбар
        /*
            scrollbar: {
               el: '.swiper-scrollbar',
               draggable: true,
            },
            */

        // Кнопки "влево/вправо"
        navigation: {
          prevEl: '.hero-slider__arrow-left',
          nextEl: '.hero-slider__arrow-right',
        },

        // Брейкпоинты

        breakpoints: {
          320: {
            slidesPerView: 1.3,
            spaceBetween: 10,
            centeredSlides: false,
          },
          639.98: {
            slidesPerView: 1,
            centeredSlides: true,
          },
          991.98: {
            spaceBetween: 20,
          },
          1365.98: {
            slidesPerView: 1,
          },
        },

        on: {},
      });
    }
    document.querySelector('.use')?.classList.add('use--mobile');
    document.querySelector('.products')?.classList.add('products--mobile');
  }
});
