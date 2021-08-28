import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService, AuthService } from 'src/app/tools/services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],

})
export class LoginComponent implements OnInit {

 
  public loginForm: FormGroup
  btndisabled:boolean = false;
  constructor(private authService:AuthService , private alertService:AlertService) {}

  ngOnInit() {
    sessionStorage.clear();

    this.createLoginForm();
  }



  private createLoginForm(){

    this.loginForm =  new FormGroup({
      username: new FormControl('' , Validators.required),
      password: new FormControl('',Validators.required)
    })


  }
  onLogin() {

    this.authService.login(this.loginForm.value).subscribe(resp=>{
       console.log(resp)
    })


  }

}