import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertService, GroupService } from 'src/app/tools/services';

@Component({
  selector: 'app-group-form',
  templateUrl: './group-form.component.html',
  styleUrls: ['./group-form.component.scss']
})
export class GroupFormComponent implements OnInit {

  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
  loading:boolean = false;
  isDisabled:boolean=false;
  groupForm: FormGroup;
  submitted = false;
  disablesubmit = false;
  returnUrl: string;
  error = '';
  roles=[];
  groups=[];
  ready:boolean = false

  constructor(private addNewGroup: GroupService, private alerts: AlertService,
    private router : Router,
    @Inject(MAT_DIALOG_DATA) public data:any) {}

	ngOnInit() {
    this.createGroup();
  }

  createGroup(){
    this.groupForm = new FormGroup({
      description: new FormControl('', Validators.required),
      name: new FormControl('', Validators.required)
      });
  }

  submit(){
    if(!this.groupForm.valid){
      this.alerts.error("Please fill all fields provided");
    }else{

        this.loading = true;
        this.addNewGroup.postGroup(this.groupForm.value).subscribe(res=>{
          this.alerts.success("Group registration successful");
          this.isDisabled=true;

        },(error:any)=>{
          this.loading = false;
          this.alerts.error(error);
          this.isDisabled=false;
        })

    }
  }


}