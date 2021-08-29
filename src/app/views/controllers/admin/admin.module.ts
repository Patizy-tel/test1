import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin.routing';
import { UsersListComponent } from './Users/users-list/users-list.component';
import { UsersFormComponent } from './Users/users-form/users-form.component';
import { EditUserComponent } from './Users/edit-user/edit-user.component';
import { MoreInfoComponent } from './Users/more-info/more-info.component';


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
    EditUserComponent,
    MoreInfoComponent
   


  ],
  exports:[
    UsersListComponent,
    UsersFormComponent,
    EditUserComponent,
    MoreInfoComponent
 
   

 
  ]
})
export class AdminModule { }
