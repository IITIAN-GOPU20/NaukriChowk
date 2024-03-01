import { AfterViewInit, Component, OnInit } from '@angular/core';
import '../svg-animation.js';
import { FormGroupDirective } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [FormGroupDirective]
})
export class RegisterComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    setTimeout(()=>{
      (window as any).initialize();
    }, 1)
    
  }

  signUp(form: any){
    console.log(form)
  }

}
