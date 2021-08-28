import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from '../tools/helpers/auth.guard';
import { LoginComponent } from './controllers/auth/login/login.component';
import { FullComponent } from './layouts/full.component';


export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: '/admin', pathMatch: 'full' },
      {
        path: 'admin',
        loadChildren: () =>
        import('./controllers/admin/admin.module').then((m) => m.AdminModule)
   
      }
    ]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path: '**',
    redirectTo: '/admin'
  }
];



@NgModule({
  imports: [RouterModule.forRoot(Approutes, { useHash: true })],
  exports: [RouterModule],
})
export class ViewRoutingModule {}
