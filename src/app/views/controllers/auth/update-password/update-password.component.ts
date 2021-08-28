import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertService, AuthService } from 'src/app/tools/services';






@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {
   token:any;
   uuid:any;
   
  public loginForm: FormGroup
  btndisabled:boolean = false;
  constructor(private route:ActivatedRoute ,private authService:AuthService , private alertService:AlertService) { }

  ngOnInit() {

    this.uuid = this.route.snapshot.params['uuid'];
    this.token = this.route.snapshot.params['token'];


    console.log(this.token,this.uuid)
    this.createLoginForm();
  }



  private createLoginForm(){

    this.loginForm =  new FormGroup({
      uuid: new FormControl(this.uuid , Validators.required),
      token: new FormControl(this.token , Validators.required),
      new_password1: new FormControl('' ,Validators.required),
      new_password2: new FormControl('', Validators.required)

 
    })


  }
  onLogin() {
/*
    this.btndisabled = true;

     if(this.loginForm.value.new_password1 != this.loginForm.value.new_password2){

      this.alertService.error('passwords are not matching');
        
      this.btndisabled =false;
     }else{


    
    this.authService.resetConfirm(this.loginForm.value)
    .subscribe((resp:any)=>{

      console.log(resp);
      this.alertService.success('Update Success👌')
      
      this.btndisabled =false;
      this.authService.gotoLoginpage();

      
    } ,(err =>{

      
      this.btndisabled = false;

      console.log(err);
      this.alertService.error(err.message)
      

       
    }))



     }


  */
  }

}