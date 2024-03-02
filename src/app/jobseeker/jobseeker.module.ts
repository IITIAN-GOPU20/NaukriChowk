import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobListingComponent } from './job-listing/job-listing.component';
import { JobseekerRoutingModule } from './jobseeker-routing.module';
import { Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { JobDetailComponent } from './job-detail/job-detail.component';



@NgModule({
  declarations: [
    JobListingComponent,
    JobDetailComponent
  ],
  imports: [
    CommonModule,
    JobseekerRoutingModule,
    SharedModule
  ]
})
export class JobseekerModule { }
