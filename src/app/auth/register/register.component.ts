declare var google :any;
import { AfterViewInit, Component, OnInit } from '@angular/core';
import '../svg-animation.js';
import { FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [FormGroupDirective]
})
export class RegisterComponent implements OnInit, AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id: '785038016750-dfqnsdf42ho3icq8u4akh7vh0k6jur0o.apps.googleusercontent.com',
      callback: (resp:any)=>this.handleLogin(resp)
    });
    google.accounts.id.renderButton(document.getElementById('google-btn'),{
      // text: "signup_with",
      type: "standard",
      shape: "circle"
      
    })
    google.accounts.id.prompt();
  }
  private decodeToken(token:string){
    return JSON.parse(atob(token.split(".")[1]));
  }
  handleLogin(response:any){
    if(response){
      const payload=this.decodeToken(response.credential);
      sessionStorage.setItem("loggedInUser",JSON.stringify(payload));
     
      this.router.navigate(['/']);
    }
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
