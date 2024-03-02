import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  currentPage: number = 1;
  totalPages: number = 15;
  constructor() { }

  ngOnInit(): void {
  }

  onPageChange(page: number) {
    this.currentPage = page;
    console.log(page)
  }

}
