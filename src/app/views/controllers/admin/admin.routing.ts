import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UsersListComponent } from './Users/users-list/users-list.component';

const routes: Routes = [
{
  path:'',
  component:UsersListComponent,
  data: {
    title: "Sys Users",
    urls: [{ title: "Users", url: "/admin" }],
  },
}



];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
