import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var AOS: any;
declare var $: any;
@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css', '../home.module.css']
})
export class BrandsComponent implements OnInit, AfterViewInit {
  @ViewChild('brandSlider') brandSliderRef!: ElementRef;
  @ViewChild('testimonialSlider') testimonialSliderRef!: ElementRef;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    // aos init
    AOS.init({
      duration: 1000,
      once: true,
    });
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


    if (this.brandSliderRef && this.brandSliderRef.nativeElement) {
      const brandSlider = $(this.brandSliderRef.nativeElement);
      brandSlider.slick({
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

    }



    /*testimonial_slider */
    if (this.testimonialSliderRef && this.testimonialSliderRef.nativeElement) {
      const testimonialSlider = $(this.testimonialSliderRef.nativeElement);
      testimonialSlider.slick({
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
    }




    /* Client review_slider*/
    // $('.review-active').slick({
    //   infinite: true,
    //   slidesToShow: 1,
    //   slidesToScroll: 1,
    //   autoplay: true,
    //   arrows: true,
    //   autoplaySpeed: 2500,
    //   prevArrow: '<button class="prevArrow">Prev</button>',
    //   nextArrow: '<button class="nextArrow">Next</button>',
    // });

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
