import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { SendMailRoutingModule } from './sendmail-routing.module';
import { SendEmailComponent } from './send-email.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ReactiveFormsModule,
    FlexLayoutModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    SendMailRoutingModule,MatProgressSpinnerModule

  ],
  declarations: [SendEmailComponent],
  exports:[SendEmailComponent]
})
export class sendMailModule {}
