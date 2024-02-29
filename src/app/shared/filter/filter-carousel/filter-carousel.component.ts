import { AfterViewChecked, AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var AOS: any;
declare var $: any;
@Component({
  selector: 'app-filter-carousel',
  templateUrl: './filter-carousel.component.html',
  styleUrls: ['./filter-carousel.component.css']
})
export class FilterCarouselComponent implements OnInit, AfterViewInit, AfterViewChecked {
  filterCarouselItem = [
  {
    title: "Item 1 Title",
    subtitle: "Item 1 Subtitle",
    link: "https://example.com/item1"
  },
  {
    title: "Item 2 Title",
    subtitle: "Item 2 Subtitle",
    link: "https://example.com/item2"
  },
  {
    title: "Item 3 Title",
    subtitle: "Item 3 Subtitle",
    link: "https://example.com/item3"
  },
  {
    title: "Item 4 Title",
    subtitle: "Item 4 Subtitle",
    link: "https://example.com/item4"
  },
  {
    title: "Item 5 Title",
    subtitle: "Item 5 Subtitle",
    link: "https://example.com/item5"
  },
  {
    title: "Item 6 Title",
    subtitle: "Item 6 Subtitle",
    link: "https://example.com/item6"
  },
  {
    title: "Item 7 Title",
    subtitle: "Item 7 Subtitle",
    link: "https://example.com/item7"
  },
  {
    title: "Item 8 Title",
    subtitle: "Item 8 Subtitle",
    link: "https://example.com/item8"
  },
  {
    title: "Item 9 Title",
    subtitle: "Item 9 Subtitle",
    link: "https://example.com/item9"
  },
  {
    title: "Item 10 Title",
    subtitle: "Item 10 Subtitle",
    link: "https://example.com/item10"
  }, {
    title: "Item 11 Title",
    subtitle: "Item 11 Subtitle",
    link: "https://example.com/item11"
  },
  {
    title: "Item 12 Title",
    subtitle: "Item 12 Subtitle",
    link: "https://example.com/item12"
  },
  {
    title: "Item 13 Title",
    subtitle: "Item 13 Subtitle",
    link: "https://example.com/item13"
  },
  {
    title: "Item 14 Title",
    subtitle: "Item 14 Subtitle",
    link: "https://example.com/item14"
  },
  {
    title: "Item 15 Title",
    subtitle: "Item 15 Subtitle",
    link: "https://example.com/item15"
  },
  {
    title: "Item 16 Title",
    subtitle: "Item 16 Subtitle",
    link: "https://example.com/item16"
  }
]
constructor() { }

ngOnInit(): void {
}
ngAfterViewInit(): void {


  $('.brand-slider-item').slick({
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    arrows: true,
    prevArrow: '.prev-arrow',
    nextArrow: '.next-arrow',


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


ngAfterViewChecked(): void {
  this.toggleArrows();
}

toggleArrows(): void {
  const slick = $('.brand-slider-item').slick('getSlick');
  const totalSlides = slick.slideCount;
  const currentSlide = slick.currentSlide;

  if(currentSlide === 0) {
  $('.prev-arrow').hide();
} else {
  $('.prev-arrow').show();
}

if (totalSlides - currentSlide <= slick.options.slidesToShow) {
  $('.next-arrow').hide();
} else {
  $('.next-arrow').show();
}
  }


}
