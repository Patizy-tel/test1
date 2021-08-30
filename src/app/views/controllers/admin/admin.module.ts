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
import { GroupListComponent } from './Groups/group-list/group-list.component';
import { GroupFormComponent } from './Groups/group-form/group-form.component';
import { EditGroupComponent } from './Groups/edit-group/edit-group.component';
import { GroupPermissionsComponent } from './Groups/group-permissions/group-permissions.component';


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
    PermissionsComponent,
    GroupListComponent,
    GroupFormComponent,
    EditGroupComponent,
    GroupPermissionsComponent
   


  ],
  exports:[
    UsersListComponent,
    UsersFormComponent,
    EditUserComponent,
    MoreInfoComponent,
    PermissionsComponent,
    GroupListComponent,
    GroupFormComponent,
    EditGroupComponent,
    GroupPermissionsComponent
 
   

 
  ]
})
export class AdminModule { }
