import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { GroupService } from 'src/app/tools/services';
import { EditGroupComponent } from '../edit-group/edit-group.component';
import { GroupFormComponent } from '../group-form/group-form.component';
import { GroupPermissionsComponent } from '../group-permissions/group-permissions.component';

@Component({
  selector: 'app-group-list',
  templateUrl: './group-list.component.html',
  styleUrls: ['./group-list.component.scss']
})
export class GroupListComponent implements OnInit {

  displayedColumns : string[] = ['index', 'name','description' ,'edit' ];
  dataSource = new MatTableDataSource()
  @ViewChild(MatSort, {static: true})sort :any= MatSort;
  @ViewChild(MatPaginator, {static: true})paginator :any= MatPaginator;
  isLoading :Boolean =true;
  isData :Boolean =false;


  constructor( public dialog : MatDialog, private router : Router, private getGroups: GroupService) {}

  applyFilter(filterValue :any) {
      filterValue = filterValue.trim(); // Remove whitespace
      filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
      this.dataSource.filter = filterValue;
  }

  ngOnInit() {
    this.loadGroups()

  }



  openDialog(): void {
    const dialogRef = this.dialog.open( GroupFormComponent  , {
      width: '800px',
      height:'600px',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.loadGroups();
    });
  }

editGroup(x:String){
console.log(x)
    const dialogRef = this.dialog.open( EditGroupComponent , {
      width: '800px',
      height:'400px',
      data: {
        id:x}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.loadGroups();
    }); 
  }

  revokePermission(x:String){

   /* const dialogRef = this.dialog.open( RevokePermissionComponent , {
      width: '800px',
      height:'400px',
      data: {x}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.loadGroups();
    });*/
  }

  revokeBulkPermissions(x:String){

   /* const dialogRef = this.dialog.open( RevokeBulkPermissionsComponent , {
      width: '800px',
      height:'400px',
      data: {x}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.loadGroups();
    });*/
  }

  assignPermission(x:String){

    const dialogRef = this.dialog.open(GroupPermissionsComponent , {
      width: '800px',
      height:'400px',
      data: {id:x}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.loadGroups();
    });
  }

  assignBulkPermissions(x:String){
/*
    const dialogRef = this.dialog.open( AssignBulkPermissionsComponent , {
      width: '800px',
      height:'400px',
      data: {x}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

      this.loadGroups();
    });*/
  }

  deleteGroup(x:string){
    this.getGroups.deleteGroup(x).subscribe((res:any)=>{
      console.log(res)
    },err=>{
      console.log(err)
    })
  }

  public loadGroups() {

    this.isLoading = true;
      this.getGroups.getGroups().subscribe((resp:any) => {
console.log(resp)
              if(resp.content.length > 0){
                this.dataSource = new MatTableDataSource(resp.content.reverse());
                this.dataSource.paginator = this.paginator;
                this.isLoading = false;
                  this.isData = false

              }else{
                this.isLoading = false
                this.isData = true


              }

        })

  }
}