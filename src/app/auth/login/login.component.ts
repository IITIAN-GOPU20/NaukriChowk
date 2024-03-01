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
    setTimeout(()=>{
      (window as any).initialize();
    }, 1)
    
  }

  login(form: any){
    console.log(form)

  }

}
