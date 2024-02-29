import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-carousel-item',
  templateUrl: './filter-carousel-item.component.html',
  styleUrls: ['./filter-carousel-item.component.css']
})
export class FilterCarouselItemComponent implements OnInit {
  @Input() item!: any
  constructor() { }

  ngOnInit(): void {
  }

}
