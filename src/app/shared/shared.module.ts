import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToggleSwitchComponent } from './components/toggle-switch/toggle-switch.component';
import { FilterComponent } from './filter/filter.component';
import { FilterCheckboxComponent } from './filter/filter-checkbox/filter-checkbox.component';
import { FilterCarouselComponent } from './filter/filter-carousel/filter-carousel.component';
import { FilterCarouselItemComponent } from './filter/filter-carousel/filter-carousel-item/filter-carousel-item.component';
import { RangeSliderComponent } from './filter/range-slider/range-slider.component';
import { JobCardsComponent } from './job-seeker/job-cards/job-cards.component';
import { PaginationComponent } from './components/pagination/pagination.component';


@NgModule({
  declarations: [
    ToggleSwitchComponent,
    FilterComponent,
    FilterCheckboxComponent,
    FilterCarouselComponent,
    FilterCarouselItemComponent,
    RangeSliderComponent,
    JobCardsComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToggleSwitchComponent,
    FilterComponent,
    FilterCarouselComponent,
    JobCardsComponent,
    PaginationComponent
  ]
})
export class SharedModule { }
