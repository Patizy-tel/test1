import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AlertService, GroupService, UserService } from 'src/app/tools/services';

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
  groups=[];
  ready:boolean = false
  constructor(public dialog : MatDialog,private userServices:UserService , private alertServices:AlertService,  public snackBar: MatSnackBar , private groupService:GroupService ) { }



  ngOnInit() {
        this.createUserForm();
        this.getGroups()
  
 
  }


  private getGroups (){


     this.groupService.getAllGroups().subscribe((resp:any)=>{ 
      this.groups =  resp
      this.ready =  true
     })
  }






  createUserForm(){

    this.userForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      groupId: new FormControl('', [Validators.required]),
      ownerId: new FormControl('', [Validators.required]),
      phoneNumber:new FormControl(''),
      initials: new FormControl(''),
      username: new FormControl(''),
      portalClient:new FormControl('')

    });

  }

  get f() {
    return this.userForm.controls;
  }


  async onSubmit() {
this.userServices.post(this.userForm.value).subscribe(resp=>{
   this.alertServices.success('Done')
} ,
err=>{

   this.alertServices.error(err.message)
})





  }

}
