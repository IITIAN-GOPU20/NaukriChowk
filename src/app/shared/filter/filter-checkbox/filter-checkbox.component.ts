import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-filter-checkbox',
  templateUrl: './filter-checkbox.component.html',
  styleUrls: ['./filter-checkbox.component.css']
})
export class FilterCheckboxComponent implements OnInit, AfterViewInit {

  constructor() { }
  @Input() options: any = []
  @Input() title: string = ""
  showMore: boolean = false;
  collapsed: boolean = false;

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
   
  }

  initPopover() {
    $('[data-toggle="popover"]').popover(
      {
        placement: 'auto', // auto or top or left or right
        container: 'body',
        title: '<span>X</span>',
        html: true
      }
    )
  }
}
  



