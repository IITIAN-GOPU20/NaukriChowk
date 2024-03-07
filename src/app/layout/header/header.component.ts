import { Component, HostListener, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CategoryService } from 'src/app/shared/services/category.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';
import { COMPANY_TYPES, JOBS_TYPE } from './constant';
import { LocationService } from 'src/app/shared/services/location.service';
import { IndustryService } from 'src/app/shared/services/industry.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  allJobCategories!: any
  allCompanyType!: any
  locations!: any
  allIndustries!: any
  popularJobs: any[] = []
  demandingJobs: any[] = []
  jobsByLocation: any[] = []
  companyCategories: any[] = []
  companyCollections: any[] = []
  companyIndustry: any[] = []
  private activeSubscription: Subscription = new Subscription();
  constructor(private tokenStorage: TokenStorageService, private categoryService: CategoryService, private locationService: LocationService
    , private industryService: IndustryService) { }

  ngOnInit(): void {
    console.log("headerComponent")
    this.categoryService.getAllJobCategory();
    this.categoryService.getAllCompanyCategory();
    this.locationService.getAllLocation();
    this.industryService.getAllIndustry()
    this.activeSubscription.add(
      this.categoryService.jobCategory$.subscribe(
        (jobCategories: any) => {
          this.allJobCategories = jobCategories;
          console.log('All Job Categories:', this.allJobCategories);
          this.createJobsSections()
        },
        (error: any) => {
          // Handle errors here
          console.error('Error fetching job categories:', error);
        }
      )
    );

    this.activeSubscription.add(
      this.categoryService.companyCategory$.subscribe(
        (companyCategories: any) => {
          this.allCompanyType = companyCategories;
          this.createCompaniesSections()
          console.log('All Company Categories:', this.allCompanyType);
        },
        (error: any) => {
          // Handle errors here
          console.error('Error fetching company categories:', error);
        }
      )
    );

    this.activeSubscription.add(
      this.locationService.location$.subscribe(
        (locations: any) => {
          this.locations = locations;
          // this.createLocationSection()
          console.log('All Location:', this.locations);
          this.createLocationSection()
        },
        (error: any) => {
          // Handle errors here
          console.error('Error fetching Location:', error);
        }
      )
    );

    this.activeSubscription.add(
      this.industryService.industry$.subscribe(
        (allIndustries: any) => {
          this.allIndustries = allIndustries;
          // this.createLocationSection()
          console.log('All Industries:', this.allIndustries);
          this.createIndustrySection()
        },
        (error: any) => {
          // Handle errors here
          console.error('Error fetching Industries:', error);
        }
      )
    );


  }
  createJobsSections() {

    Object.entries(this.allJobCategories).forEach(([key, value]) => {
      // Depending on your category, create jobs using your JobService
      switch (key) {
        case JOBS_TYPE.POPULAR:
          this.createPopularJobs(value);
          break;
        case JOBS_TYPE.DEMAND:
          this.createDemandingJobs(value)
          // Implement creation of jobs for DEMAND category
          break;
        // Add more cases for other categories as needed
        default:
          break;
      }
    });
  }

  createLocationSection() {

    console.log("Creating popular jobs for category:", this.locations);

    const newJobs = this.locations;
    this.jobsByLocation = newJobs.length > 5 ? newJobs.slice(0, 5) : newJobs;
  }

  createIndustrySection() {

    console.log("Creating popular jobs for category:", this.allIndustries);

    const newJobs = this.allIndustries;
    this.companyIndustry = newJobs.length > 5 ? newJobs.slice(0, 5) : newJobs;
  }

  createCompaniesSections() {

    Object.entries(this.allCompanyType).forEach(([key, value]) => {
      // Depending on your category, create jobs using your JobService
      switch (key) {
        case COMPANY_TYPES.CATEGORIES:
          this.createCompanyCtegories(value);
          break;
        case COMPANY_TYPES.COLLECTIONS:
          this.createCompanyCollections(value)
          break;
        // Add more cases for other categories as needed
        default:
          break;
      }
    });
  }

  createPopularJobs(category: any) {
    console.log("Creating popular jobs for category:", category);

    const newJobs = category;
    this.popularJobs = newJobs.length > 5 ? newJobs.slice(0, 5) : newJobs;
  }

  createCompanyCtegories(category: any) {
    console.log("Creating compANY  for category:", category);

    const companies = category;
    this.companyCategories = companies.length > 5 ? companies.slice(0, 5) : companies;
  }

  createDemandingJobs(category: any) {
    console.log("Creating demanding jobs for category:", category);

    const newJobs = category;
    this.demandingJobs = newJobs.length > 5 ? newJobs.slice(0, 5) : newJobs;
  }

  createCompanyCollections(category: any) {
    console.log("Creating compANY  for collections:", category);

    const companies = category;
    this.companyCollections = companies.length > 5 ? companies.slice(0, 5) : companies;
  }

  ngOnDestroy() {
    this.activeSubscription.unsubscribe();
  }

  get isAuthenticated() {
    return this.tokenStorage.isAthenticated()
  }



}
