import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdatePasswordComponent } from './update-password.component';
import { UpdatePasswordRoute } from './update-password.routing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    UpdatePasswordRoute,
    MatProgressSpinnerModule
  ],
  declarations: [UpdatePasswordComponent]
})
export class UpdatePasswordModule { }
