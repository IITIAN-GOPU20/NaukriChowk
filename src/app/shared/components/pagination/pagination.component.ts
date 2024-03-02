import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input() currentPage!: number;
  @Input() totalPages!: number;
  @Output() pageChange = new EventEmitter<number>();
  pagesToShow = 5
  constructor() { }


  ngOnInit(): void {
  }

  onPrevPageClick(): void {
    const prevPage = Math.max(1, this.currentPage - 1);
    this.onPageClick(prevPage);
  }

  onNextPageClick(): void {
    const nextPage = Math.min(this.totalPages, this.currentPage + 1);
    this.onPageClick(nextPage);
  }
  onPageClick(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.pageChange.emit(this.currentPage);
    }
  }

  getPagesArray(): number[] {
    const totalPages = this.totalPages;
    const currentPage = this.currentPage;
    const pagesArray: number[] = [];

    let startPage: number;
    let endPage: number;

    if (currentPage <= this.pagesToShow) {
      startPage = 1;
      endPage = Math.min(totalPages, this.pagesToShow);
    } else {
      startPage = currentPage - Math.floor(this.pagesToShow / 2);
      endPage = startPage + this.pagesToShow - 1;

      if (endPage > totalPages) {
        endPage = totalPages;
        startPage = Math.max(1, endPage - this.pagesToShow + 1);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pagesArray.push(i);
    }

    return pagesArray;
  }


}
