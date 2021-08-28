
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from "@angular/material/paginator"
import { MatSort } from '@angular/material/sort';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import {  UserService } from 'src/app/tools/services';

import { UsersFormComponent } from '../users-form/users-form.component';


@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.scss']
})
export class AllUsersComponent implements OnInit {

  displayedColumns: string[] = [
    'index',
    'name',
    'ec',
    'email',
    'isVerified',
    'role',
    'branch',
    'Edit',
    'changeStatus'




  ];
  dataSource = new MatTableDataSource()
  total;
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  isLoading: Boolean = true;
  isData: boolean;

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
     this.userService.getAllUsers().subscribe((resp:any)=>{

      console.log(resp)
      if (resp.totalElements >=1) {
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
 /*     const dialogRef = this.dialog
          .open(EditBranchComponent, {
              width: '800px',
              height: '600px',
              data: {
                  id: id
              }
          });

      dialogRef
          .afterClosed()
          .subscribe(result => {

              this.getBranches();

          });  */
  }



  del(user_id) {

  /*  Swal.fire({
      title: 'Are you sure?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {

        this.sallonService.deleteServiceCategory(user_id)
          .subscribe(x => {

            Swal.fire(
              'Deleted!',
              'Record has been deleted.',
              'success'
            )
            this.AllSallonCategory();

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
*/

  }




  changeStatus(user){

  


  }


  openSubmitMessage(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 5000,
    });
    // this.closeDialog()
  }

}
