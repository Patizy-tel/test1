
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

     

      });
  }







}
