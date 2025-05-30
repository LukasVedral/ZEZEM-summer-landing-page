import 'swiper/css';
import 'swiper/css/navigation';
import '../styles/style.css';

// core version + navigation, pagination modules:
import Swiper from 'swiper';
import { Navigation} from 'swiper/modules';

// init Swiper:
const swiper = new Swiper('.swiper', {
  // Optional parameters
modules: [Navigation],
  loop: true,

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }
});

