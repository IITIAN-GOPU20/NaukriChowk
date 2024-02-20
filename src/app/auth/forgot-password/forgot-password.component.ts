import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import '../svg-animation.js';
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
    (window as any).initialize();
  }

  getResetLink(form: Form) {
    console.log(form)
  }

}
