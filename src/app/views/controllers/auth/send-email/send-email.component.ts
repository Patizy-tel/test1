import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService, AuthService } from 'src/app/tools/services';


@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {


  public loginForm: FormGroup
  btndisabled:boolean = false;
  constructor(private authService:AuthService , private alertService:AlertService) {}

  ngOnInit() {

    this.createLoginForm();
  }



  private createLoginForm(){

    this.loginForm =  new FormGroup({
      email: new FormControl('' , Validators.required),
 
    })


  }
  onLogin() {

 /*   this.btndisabled = true;



    this.authService.sendResetEmail(this.loginForm.value)
                    .subscribe((resp:any)=>{

                      console.log(resp);
                      this.alertService.success('Email  sent , Please check your mail')
                      
                      this.btndisabled =false;
                      this.authService.gotoLoginpage();

                      
                    } ,(err =>{

                      
                      this.btndisabled = false;

                      console.log(err);
                      this.alertService.error(err.message)
                      

                       
                    }))*/
  
  }

}