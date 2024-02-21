import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './register/register.component';
import { SharedModule } from '../shared/shared.module';
import { EmailValidatorDirective } from './directive/email-validator.directive';
import { ConfirmPasswordValidatorDirective } from './directive/confirm-password-validator.directive';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LayoutModule } from '../layout/layout.module';




@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    EmailValidatorDirective,
    ConfirmPasswordValidatorDirective,
    ForgotPasswordComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    SharedModule,
    LayoutModule
  ]
})
export class AuthModule { }
