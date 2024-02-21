import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';
import { ProfileDropdownComponent } from './header/profile-dropdown/profile-dropdown.component';



@NgModule({
  declarations: [
    HeaderComponent,
    ProfileDropdownComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,

  ],
  exports: [
    HeaderComponent
  ],
})
export class LayoutModule { }
