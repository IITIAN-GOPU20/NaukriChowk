import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { HTTP_METHOD } from '../constants/httpMethod';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators'
const HOME_API_BASE_URL = 'home/';
const CATEGORY_ENDPOINT = {
  ALL_JOB_CATEGORY: 'all-jobcategory',
  ALL_COMPANY_CATEGORY: 'all-companycategory',

}

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private jobCategorySubject: Subject<any> = new Subject<any>();
  public jobCategory$: Observable<any> = this.jobCategorySubject.asObservable();

  private companyCategorySubject: Subject<any> = new Subject<any>();
  public companyCategory$: Observable<any> = this.companyCategorySubject.asObservable();

  constructor(private server: ServerService) { }
  getAllJobCategory(): void {
    this.server.get(HOME_API_BASE_URL + CATEGORY_ENDPOINT.ALL_JOB_CATEGORY)
      .pipe(
        map((response: any) => {
          if (response.success && response.code) {
            this.jobCategorySubject.next(response.categories);
          } else {
            throw new Error('Invalid response from API');
          }
        })
      )
      .subscribe(
        () => { },
        error => console.error('Error fetching job categories:', error)
      );
  }
  getAllCompanyCategory(): void {
    this.server.get(HOME_API_BASE_URL + CATEGORY_ENDPOINT.ALL_COMPANY_CATEGORY)
      .pipe(
        map((response: any) => {
          if (response.success && response.code) {
            this.companyCategorySubject.next(response.companyType);
          } else {
            throw new Error('Invalid response from API');
          }
        })
      )
      .subscribe(
        () => { },
        error => console.error('Error fetching job categories:', error)
      );
  }
}



