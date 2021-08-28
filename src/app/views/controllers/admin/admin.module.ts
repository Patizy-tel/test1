import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin.routing';
import { UsersListComponent } from './Users/users-list/users-list.component';
import { UsersFormComponent } from './Users/users-form/users-form.component';
import { AllUsersComponent } from './Users/all-users/all-users.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [
    UsersListComponent,
    UsersFormComponent,
    AllUsersComponent,
   


  ],
  exports:[
    UsersListComponent,
    UsersFormComponent,
    AllUsersComponent,
   

 
  ]
})
export class AdminModule { }
