import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { HttpClient } from "@angular/common/http";
import {CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot} from '@angular/router';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { AuthServiceService } from '../auth-service.service';

import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';



@Component({
  selector: 'app-data-table',
  animations: [
    trigger('moveLeft', [
      // ...
      state('left', style({
        opacity: 1,
       backgroundColor: 'red',
       height: '400px'
      })),
      state('right', style({
        marginLeft: '50%' ,
        opacity: 0.8,
        height: '400px',
        background:'url(https://media.giphy.com/media/BcPbK9ci4EU31qUTkR/giphy.gif?cid=ecf05e47opqaif7o8gxwgqc3ovbygzjtf881sypmwerozm5x&rid=giphy.gif&ct=g)',
        //backgroundColor: '#c6ecff'
        backgroundSize: 'cover',
        backgroundPosition: 'center center'
      })),
      transition('left => right', [
        animate('0.5s')
      ]),
      transition('right => left', [
        animate('0.5s')
      ]),
    ]),
  ],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild('editModal') editModal: any;
  dataSource = new MatTableDataSource<any>();


 
  edit = {
    Id: 'number',
    FirstName: 'string',
    LastName: 'string',
    Email: 'string'
  };

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'avatar', 'name', 'email', 'edit', 'delete'];

  constructor(private http: HttpClient, private router: Router, private modalService: NgbModal, private auth: AuthServiceService) {
  }
  ngOnInit() {
    //this.userlogged();
    
  }
  ngAfterViewInit(): void {
    this.compileTable();
    this.getData();
  }

  getData(): void {
    this.http.get('https://reqres.in/api/users').subscribe((res: any) => {
      this.compileTable(res.data);
    })
  }
  compileTable(data = []) {
    this.dataSource = new MatTableDataSource<any>(data)
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    //console.log(filterValue);
  }

  isMoved = true;

  toggleLeft() {
    this.isMoved = !this.isMoved;
  }

  openEditModal(data:any, index:any) {
    console.log(data);
    this.edit.Id = data.id;
    this.edit.FirstName = data.first_name;
    this.edit.LastName = data.last_name;
    this.edit.Email = data.email;
  
    this.modalService.open(this.editModal, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      // this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      // this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  updateData() {
    console.log("updated");
    this.auth.getUpdateData(this.edit).subscribe(
      (res: any) => {
        console.log(res);
        this.modalService.dismissAll();
        this.getData();
      }
    )
  }

  DeleteData(delData:any, index:any) {
    //console.log(delData);
    this.auth.deleteData(delData).subscribe(
      (res: any) => {
        //console.log(res);
        //this.modalService.dismissAll();
        this.getData();
      }
    )
  }
 

  
}
