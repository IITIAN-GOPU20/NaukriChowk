import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    // Todo remove after test
    path: 'test',
    loadChildren: () => import('./test/test.module').then(m => m.TestModule)
  },
  {
    path: '',
    loadChildren: () => import('./jobseeker/jobseeker.module').then(m => m.JobseekerModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
