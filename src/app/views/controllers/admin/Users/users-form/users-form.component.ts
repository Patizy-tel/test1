import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/tools/services';

@Component({
  selector: 'app-users-form',
  templateUrl: './users-form.component.html',
  styleUrls: ['./users-form.component.scss']
})
export class UsersFormComponent implements OnInit {
  userForm: FormGroup;
  loading = false;
  submitted = false;
  disablesubmit = false;
  returnUrl: string;
  error = '';
  roles=[];
  branches=[];
  ready:boolean = false
  constructor(public dialog : MatDialog,private userServices:UserService ,   public snackBar: MatSnackBar ) { }



  ngOnInit() {
        this.createUserForm();

  
 
  }







  createUserForm(){

    this.userForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      ec: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      branchId: new FormControl('', [Validators.required]),
      role: new FormControl('', [Validators.required]),



    });

  }

  get f() {
    return this.userForm.controls;
  }


  async onSubmit() {





  }

}
