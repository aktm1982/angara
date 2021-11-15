import Swiper, { Navigation, Pagination, Thumbs, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import './customSwiper.scss';

Swiper.use([Navigation, Pagination, Thumbs, Autoplay])
const swiperSlider = new Swiper('.news_block', {
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 40,
    }
  }
});

// var swiperThumb = new Swiper(".product__thumb", {
//   spaceBetween: 10,
//   slidesPerView: 'auto',
//   freeMode: true,
//   watchSlidesVisibility: true,
//   watchSlidesProgress: true,
// });
// var swiperProduct = new Swiper(".product__carousel", {
//   spaceBetween: 10,
//   thumbs: {
//     swiper: swiperThumb,
//   },
// });