import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
import { AuthServiceService } from 'src/app/admin/auth-service.service';
import { Router } from '@angular/router';
import { MatSnackBar } from "@angular/material/snack-bar";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  getToken: string | null
  loginForm: FormGroup;
  
  constructor(private authService: AuthServiceService, private router: Router, private snackBar: MatSnackBar) {
    // this.getToken = localStorage.getItem("token");
    // let token = (this.getToken);
    // console.log('token', token);
    // if(token !== null) {
    //   this.router.navigateByUrl('');
    // }
  }
  // get userLogged() {
  //   return this.authGuardService.isLoggedIn;
  // }

  ngOnInit() {
    this.initForm();
    
  }
  initForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    })
  }

  get email() {
    return this.loginForm.get('email');
  }

   loginProcess() {
    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value).subscribe(
        result => {
          //console.log(result);
          //alert(result.token);
          this.snackBar.open('Login success', '', {
            duration: 3000,
            verticalPosition: 'top'
          })
          this.loginForm.reset();
          localStorage.setItem ('token', result.token);
          setTimeout(() => this.router.navigateByUrl('/admin') ,300) 
        },
        errors => {
          //console.log(errors);
          //alert(errors.error.error);
          this.snackBar.open(errors.error.error, '', {
            duration: 3000,
            verticalPosition: 'top'
          })
        },
      )

   
      
    }
  
  } 

 

  

}
