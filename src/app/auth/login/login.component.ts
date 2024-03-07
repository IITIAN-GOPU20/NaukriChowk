import { AfterViewInit, Component, OnInit } from '@angular/core';
import '../svg-animation.js';
import { Login } from 'src/app/shared/models/login.interface';
import { UserRole } from 'src/app/shared/models/enum';
import { AuthService } from '../service/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {

  constructor(private authService: AuthService) { }
  role: UserRole  = UserRole.SEEKER

  ngOnInit(): void {
  }


  ngAfterViewInit() {
    setTimeout(()=>{
      (window as any).initialize();
    }, 1)
    
  }

  login(form: any){
    if (!form.valid) {
      console.log("Invalid Form")
      return
    }

    const email = form.controls.email.value;
    const password = form.controls.password.value;
    console.log(email,password)
    // Check if the required fields are filled
    if (email && password) {
      // Call the register method from the AuthService passing the form data
      const user: Login = {
        email,
        password,
        role: this.role 
      }
      this.authService.login(user);
    } else {
      // Display an error message or perform some action if required fields are missing
      console.error('All fields are required.');
    }

  }

}
