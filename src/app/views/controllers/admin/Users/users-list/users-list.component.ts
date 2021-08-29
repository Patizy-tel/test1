
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from "@angular/material/paginator"
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import {  UserService } from 'src/app/tools/services';

import { UsersFormComponent } from '../users-form/users-form.component';
import { map } from 'rxjs/operators';
import { EditUserComponent } from '../edit-user/edit-user.component';
import { Users } from 'src/app/tools/models';
import { MoreInfoComponent } from '../more-info/more-info.component';
import { PermissionsComponent } from '../permissions/permissions.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {


  displayedColumns: string[] = [
    'index',
    'name',
    'ec',
    'email',
    'isVerified',
    'role',
    'branch',
    'delete',
    'Edit',
    'changeStatus',

    'more',
    'permmissions'




  ];
  pageEvent: PageEvent;
  dataSource = new MatTableDataSource()
  total;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  isLoading: Boolean = true;
  isData: boolean;
  totalElements:number =  0

  constructor( private userService: UserService, public dialog: MatDialog, private _snackBar: MatSnackBar) { }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  ngOnInit() {

    this.getUsers();
  }



  public getUsers(){

    this.isLoading =  true;
     this.userService.findAll(0,5).subscribe((resp:any)=>{

      console.log(resp)
      if (resp. totalElements >=1) {
        this.dataSource = new MatTableDataSource(resp.content.reverse());
        this.dataSource.paginator = this.paginator;
        this.isLoading = false
        this.isData = false;
      } else {
        this.isLoading = false
        this.isData = true;
      }


     })




  }

  openDialog(): void {
   const dialogRef = this
      .dialog
      .open(UsersFormComponent, {
        width: '800px',
        height: '600px',
        data: {}
      });

    dialogRef
      .afterClosed()
      .subscribe(result => {

        this.getUsers();

      });
  }

  openEditDialog(id): void {
     const dialogRef = this.dialog
          .open(EditUserComponent, {
              width: '800px',
              height: '600px',
              data: {
                  id: id
              }
          });

      dialogRef
          .afterClosed()
          .subscribe(result => {

             this.getUsers()

          });  
  }


  
  openInfoDialog(id): void {
    const dialogRef = this.dialog
         .open(MoreInfoComponent, {
             width: '800px',
             height: '600px',
             data: {
                 id: id
             }
         });

     dialogRef
         .afterClosed()
         .subscribe(result => {

            this.getUsers()

         });  
 }



  
 openPermDialog(id): void {
  const dialogRef = this.dialog
       .open(PermissionsComponent, {
           width: '800px',
           height: '600px',
           data: {
               id: id
           }
       });

   dialogRef
       .afterClosed()
       .subscribe(result => {

          this.getUsers()

       });  
}



  del(user_id) {

    Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        this.userService.deleteUser(user_id).subscribe(x => {

            Swal.fire(
              'Deleted!',
              'Record has been deleted.',
              'success'
            )
            this.getUsers();

          },
            err => {
              this.openSubmitMessage(err, "OK")
            }
          )


      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Record is safe :)',
          'error'
        )
      }
    })


  }




  changeStatus(user:Users){

    this.userService.updateUserStatus(user ,!user.enabled).subscribe(resp=>{
      this.openSubmitMessage('Success' ,'Done')
    })


  


  }


  openSubmitMessage(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
    // this.closeDialog()
  }

}
