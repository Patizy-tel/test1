import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupListComponent } from './Groups/group-list/group-list.component';

import { UsersListComponent } from './Users/users-list/users-list.component';

const routes: Routes = [
{
  path:'',
  component:UsersListComponent,
  data: {
    title: "Sys Users",
    urls: [{ title: "Users", url: "/admin" }],
  },
},

{
  path:'groups',
  component:GroupListComponent,
  data: {
    title: "Groups",
    urls: [{ title: "Groups", url: "/admin" }],
  },
}



];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
