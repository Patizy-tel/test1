import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { ViewRoutingModule } from './view-routing.module';
import { LoginComponent } from './controllers/auth/login/login.component';
import { sendMailModule } from './controllers/auth/send-email/sendmail.module';
import { UpdatePasswordModule } from './controllers/auth/update-password/update-password.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './controllers/admin/material.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    PerfectScrollbarModule,
    MaterialModule,
    NgbModule,
    ViewRoutingModule,
    sendMailModule,
    UpdatePasswordModule 

  ],
  declarations:[
  LoginComponent
  ],
  exports:[
    

    LoginComponent
  ]

})
export class ViewModule { }
