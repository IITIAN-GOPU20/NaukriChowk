declare var google :any;
import { AfterViewInit, Component, OnInit } from '@angular/core';
import '../svg-animation.js';
import { FormGroupDirective } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';
import { Register } from 'src/app/shared/models/register.interface.js';
import { UserRole } from 'src/app/shared/models/enum';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [FormGroupDirective]
})
export class RegisterComponent implements OnInit, AfterViewInit {

  constructor(private authService: AuthService,private router: Router) { }
  role: UserRole  = UserRole.SEEKER
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
    setTimeout(() => {
      // (window as any).initialize();
    }, 1)

  }
  onModeChanged(role: UserRole) {
    this.role = role
  }
  signUp(form: any) {

    console.log(form);
    if (!form.valid) {
      console.log("Invalid Form")
      return
    }

    const email = form.controls.email.value;
    const mobileno = form.controls.mobileno.value;
    const gender = form.controls.gender.value;
    const fullname = form.controls.fullname.value;
    const password = form.controls.password.value;
    console.log(email, mobileno, gender, fullname, password)
    // Check if the required fields are filled
    if (email && mobileno && gender && fullname && password) {
      // Call the register method from the AuthService passing the form data
      const user: Register = {
        email,
        name: fullname,
        password,
        phoneNumber: mobileno,
        gender: gender,
        role: this.role 
      }
      this.authService.register(user);
    } else {
      // Display an error message or perform some action if required fields are missing
      console.error('All fields are required.');
    }
  }

}
