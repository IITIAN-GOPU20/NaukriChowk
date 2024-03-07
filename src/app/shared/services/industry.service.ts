import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { map } from 'rxjs/operators'
import { Observable, Subject } from 'rxjs';

const HOME_API_BASE_URL = 'home/';
const INDUSTRY_ENDPOINT = {
  INDUSTRY: 'all-industry',

}
@Injectable({
  providedIn: 'root'
})
export class IndustryService {
  private industrySubject: Subject<any> = new Subject<any>();
  public industry$: Observable<any> = this.industrySubject.asObservable();
  constructor(private server: ServerService) { }

  getAllIndustry(): void {
    this.server.get(HOME_API_BASE_URL + INDUSTRY_ENDPOINT.INDUSTRY)
      .pipe(
        map((response: any) => {
          if (response.success && response.code) {
            this.industrySubject.next(response.industries);
          } else {
            throw new Error('Invalid response from API');
          }
        })
      )
      .subscribe(
        () => { },
        error => console.error('Error fetching industries:', error)
      );
  }
}



