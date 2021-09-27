import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Validators } from "@angular/forms";
// import { AuthServiceService } from './auth-service.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'dream-app';
  name: '';
  data: any;
  //loginForm: FormGroup;

  // constructor(private authService: AuthServiceService) {

  // }

  // ngOnInit() {
  //   this.initForm();
  // }
  // initForm() {
  //   this.loginForm = new FormGroup({
  //     email: new FormControl('', [Validators.required]),
  //     password: new FormControl('', [Validators.required]),
  //   })
  // }

  // onSubmit(person: any){
  //   console.log(this.loginForm.value);
  //   this.http.post('https://reqres.in/api/users', person).subscribe(
  //     status => {
  //       //console.log(status);
  //       let res = JSON.stringify(status);
  //       alert(res);
  //       this.data = status;
  //       console.log(status);
  //     // isko json object bana kr use kr
  //       //alert('Id: '+ status.id + '\n' +'Name: ' + status.firstname + ' ' + status.lastname + ' \n' + 'Email: ' + status.email + '\n'  +'Created at: ' + status.createdAt);
  //   })
  // }
  // loginProcess() {
  //   if (this.loginForm.valid) {
  //     this.authService.login(this.loginForm.value).subscribe(
  //       result => {
  //         console.log(result);
  //         alert(result.token);

  //       },
  //       errors => {
  //         console.log(errors);
  //         alert(errors.error.error);
  //       },
  //     )
  //   }
  // }
}
