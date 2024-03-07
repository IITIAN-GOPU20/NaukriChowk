import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/service/auth.service';
import { TokenStorageService } from 'src/app/shared/services/token-storage.service';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.css']
})
export class ProfileDropdownComponent implements OnInit {
  // isAuthenticatedSubscription!: Subscription;
  private activeSubscription: Subscription = new Subscription();
  isAuthenticated: boolean = false
  constructor(private auth: AuthService, private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
    this.activeSubscription.add(this.tokenStorageService.isAuthenticated$
      .subscribe(isAuthenticated => {
        this.isAuthenticated = isAuthenticated;
      }));

  }

  logout() {
    this.auth.logout()
  }

  menuActive = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

  ngOnDestroy() {
    this.activeSubscription.unsubscribe();
  }

}
