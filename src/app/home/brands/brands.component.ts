import { AfterViewInit, Component, OnInit } from '@angular/core';
declare var AOS: any; 
declare var $: any;
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css', '../home.module.css']
})
export class BrandsComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit() {
   
  }

  ngAfterViewInit(): void {
    let logo = document.querySelector('.logo-04');

    /*  Sticky Header*/
    window.addEventListener('scroll', () => {
      let header = document.querySelectorAll('header');

      header.forEach((headItem) => {
        headItem.classList.toggle('sticky', window.scrollY > 0);
      });
    });

    /* back to top button */
    var topBtn = $('#to-top');
    topBtn.on('click', function (e: any) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, '600');
    });

    /* search box open */
    $('.search-bar').on('click', function () {
      $('.search-box').addClass('search-open');
    });
    $('.search-close').on('click', function () {
      $('.search-box').removeClass('search-open');
    });
    // aso js init
    AOS.init({
      duration: 1000,
      once: true,
    });
  
    $('.brand-slider-item').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 1,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 1200,
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 480,
          settings: {
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 1,
          },
        },
      ],
    });
    /*testimonial_slider */
$('.testimonial-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  autoplaySpeed: 2000,
  centerMode: true,
  centerPadding: 0,
  prevArrow: '.testimonial-wrapper .prev-arrow',
  nextArrow: '.testimonial-wrapper .next-arrow',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

/* Testimonial Slider part-02 */
$('.testimonial-active').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  dots: false,
  autoplaySpeed: 2000,
  prevArrow: '<span class="prevArrow"><i class="fas fa-arrow-left"></i></span>',
  nextArrow:
    '<span class="nextArrow"><i class="fas fa-arrow-right"></i></span>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

/* Client review_slider*/
$('.review-active').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
  autoplaySpeed: 2500,
  prevArrow: '<button class="prevArrow">Prev</button>',
  nextArrow: '<button class="nextArrow">Next</button>',
});

/* client image */
// $('.client-image').slick({
//   dots: false,
//   arrows: false,
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   infinite: true,
//   autoplay: true,
//   autoplaySpeed: 1000,
//   responsive: [
//     {
//       breakpoint: 575,
//       settings: {
//         slidesToShow: 1,
//       },
//     },
//   ],
// });

  }

}