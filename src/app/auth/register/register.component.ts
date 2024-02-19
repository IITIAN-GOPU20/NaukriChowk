import { AfterViewInit, Component, OnInit } from '@angular/core';
import '../svg-animation.js';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    (window as any).initialize();
  }

  login(form: any){
    console.log(form)

  }

}
