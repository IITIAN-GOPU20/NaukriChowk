import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent implements OnInit {
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
