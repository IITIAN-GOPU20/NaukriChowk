import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandsComponent } from './brands/brands.component';
import { HomeRoutingModule } from './home-routing.module';
import { BannerComponent } from './banner/banner.component';



@NgModule({
  declarations: [
    BrandsComponent,
    BannerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
