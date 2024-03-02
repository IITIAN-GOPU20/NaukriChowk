import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { JobListingComponent } from './job-listing/job-listing.component';
import { JobDetailComponent } from './job-detail/job-detail.component';


const jobRoutes: Routes = [
  { path: '', component: JobListingComponent },
  { path: ':id', component: JobDetailComponent }
];

const routes: Routes = [
  { path: 'jobs', children: jobRoutes },
  { path: '', redirectTo: '/jobs', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JobseekerRoutingModule { }
