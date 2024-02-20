import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AuthRoutingModule } from '../auth/auth-routing.module';



@NgModule({
  declarations: [
    HeaderComponent
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
