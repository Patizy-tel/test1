import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin.routing';
import { UsersListComponent } from './Users/users-list/users-list.component';
import { UsersFormComponent } from './Users/users-form/users-form.component';
import { EditUserComponent } from './Users/edit-user/edit-user.component';
import { MoreInfoComponent } from './Users/more-info/more-info.component';
import { PermissionsComponent } from './Users/permissions/permissions.component';


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
    MoreInfoComponent,
    PermissionsComponent
   


  ],
  exports:[
    UsersListComponent,
    UsersFormComponent,
    EditUserComponent,
    MoreInfoComponent,
    PermissionsComponent
 
   

 
  ]
})
export class AdminModule { }
