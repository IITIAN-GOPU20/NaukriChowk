import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-dropdown',
  templateUrl: './profile-dropdown.component.html',
  styleUrls: ['./profile-dropdown.component.css']
})
export class ProfileDropdownComponent implements OnInit {
  @Input() isAuthenticated: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  logout() {

  }

  menuActive = false;

  toggleMenu() {
    this.menuActive = !this.menuActive;
  }

}
