import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { UserService } from 'src/app/tools/services';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {
  pemGroup:any =[]
  constructor(@Inject(MAT_DIALOG_DATA) public data: any , public dialog : MatDialog, private userService:UserService) { }

  ngOnInit() {

    this.userService.getAssgiendPermissions(this.data.id).subscribe(resp=>{

       console.log(resp)
    });

     this.userService.getUnassginedPermissions(this.data.id).subscribe(resps=>{

      console.log(resps)
     })
  }


  RevokeSomePem(x){
    console.log(x)
  }

  assignPem(x){
    console.log(x)
  }

}


