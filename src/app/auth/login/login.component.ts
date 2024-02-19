import { AfterViewInit, Component, OnInit } from '@angular/core';
import '../svg-animation.js';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

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
