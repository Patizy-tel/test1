import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AlertService, GroupService } from 'src/app/tools/services';

@Component({
  selector: 'app-group-permissions',
  templateUrl: './group-permissions.component.html',
  styleUrls: ['./group-permissions.component.scss']
})
export class GroupPermissionsComponent implements OnInit {

  constructor(private group: GroupService, private alerts: AlertService,
    private router : Router,
    @Inject(MAT_DIALOG_DATA) public data:any) { }

  ngOnInit() {

    this.getThemAll();
  }


  getThemAll(){


    this.group.getUmAssginedGroupPermissions(this.data.id).subscribe(resp=>{

       console.log(resp)
    })
  }

}
