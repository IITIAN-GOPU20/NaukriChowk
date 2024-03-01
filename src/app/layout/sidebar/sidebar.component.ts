import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent implements OnInit, AfterViewInit {
  @ViewChildren('jobcardmaincontainer') jobCardMainContainers!: QueryList<ElementRef>;
  @ViewChildren('jobcardmaincontainer1') jobCardMainContainers1!: QueryList<ElementRef>;
  @ViewChild('logo') logoContainer!: ElementRef;
  @ViewChild('brandslider') brandSlider!: ElementRef

  constructor() { }
  ngAfterViewInit(): void {
    if (this.brandSlider.nativeElement) {
      $(this.brandSlider.nativeElement).slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1200,
      });
    }


    this.jobCardMainContainers.forEach(container => {
      $(container.nativeElement).slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1200,
      });
    });

    this.jobCardMainContainers1.forEach(container => {
      $(container.nativeElement).slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 1200,
      });
    });

    if (this.logoContainer.nativeElement && this.jobCardMainContainers && this.jobCardMainContainers1) {
      $(this.logoContainer.nativeElement).hover(
        () => {
          this.jobCardMainContainers1.forEach(container => {
            $(container.nativeElement).slick('slickPause');
          });
          this.jobCardMainContainers.forEach(container => {
            $(container.nativeElement).slick('slickPause');
          });
        },
        () => {
          this.jobCardMainContainers1.forEach(container => {
            $(container.nativeElement).slick('slickPlay');
          });
          this.jobCardMainContainers.forEach(container => {
            $(container.nativeElement).slick('slickPlay');
          });
        }
      );
    }
  }

  ngOnInit(): void {
  }

 

}

