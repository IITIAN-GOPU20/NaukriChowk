import { Component, OnInit } from '@angular/core';
import { Subscription, forkJoin } from 'rxjs';
import { CategoryService } from 'src/app/shared/services/category.service';
import { IndustryService } from 'src/app/shared/services/industry.service';
import { LocationService } from 'src/app/shared/services/location.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor(private categoryService: CategoryService, private locationService: LocationService, private industryService: IndustryService) { }

  ngOnInit(): void {

    // Trigger API calls
 
  }

  ngOnDestroy() {
  }

}
