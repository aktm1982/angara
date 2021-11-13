import Swiper, { Navigation, Pagination, Thumbs, Autoplay } from 'swiper';
import 'swiper/swiper-bundle.min.css';
import './customSwiper.scss';

Swiper.use([Navigation, Pagination, Thumbs, Autoplay])
const swiperSlider = new Swiper('.news_block', {
  slidesPerView: 3,
  autoplay: {
    delay: 5000,
  },
  spaceBetween: 40,
  breakpoints: {
    1000: {      
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
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