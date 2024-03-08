import { Injectable } from '@angular/core';
import { ServerService } from './server.service';
import { map } from 'rxjs/operators'
import { Observable, Subject } from 'rxjs';
const HOME_API_BASE_URL = 'home/';
const LOCATION_ENDPOINT = {
  LOCATION: 'all-location',

}
@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private locationSubject: Subject<any> = new Subject<any>();
  public location$: Observable<any> = this.locationSubject.asObservable();
  constructor(private server: ServerService) { }

  getAllLocation(): void {
    this.server.get(HOME_API_BASE_URL + LOCATION_ENDPOINT.LOCATION)
      .pipe(
        map((response: any) => {
          if (response.success && response.code) {
            this.locationSubject.next(response.locations);
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
