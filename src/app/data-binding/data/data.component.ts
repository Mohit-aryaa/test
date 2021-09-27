import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Data } from "../data";
import { DataGetComponent } from '../data-get/data-get.component';
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})

export class DataComponent implements OnInit {
 //@Output() deleteData: EventEmitter<Data> = new EventEmitter();
 products: Data[] = [];
 setName: string;
 setEmail: string;
 setContact: number;
 active:boolean = false ;

  constructor( ) {
    this.products = [
      {
        id: 1,
        name: 'person 1',
        email: '123@gmail.com',
        contact: 1234567890
      },
      {
        id: 2,
        name: 'person 2',
        email: '1234@gmail.com',
        contact: 1234567808
      },
      {
        id: 3,
        name: 'person 3',
        email: '12354@gmail.com',
        contact: 1234567803
      }
    ];
  }

  ngOnInit() {
     // this.enableBtn();
  
  } 

  enableBtn(): boolean {
    if(this.setName && this.setEmail && this.setContact) {
      return true;
    } 
    return false
  }

  addProduct() {
    console.log("click");
    const setProducts = {
      id: 1,
      name: this.setName,
      email: this.setEmail,
      contact: this.setContact,
     }
     this.products.push(setProducts);
     console.log(this.products);
  }

  deleteProduct(product: Data) {
    const index = this.products.indexOf(product); 
    this.products.splice(index, 1)
  }

  
  
  

  
}
