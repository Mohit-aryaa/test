import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Data } from '../data';
import { DataComponent } from "../data/data.component";

@Component({
  selector: 'app-data-get',
  templateUrl: './data-get.component.html',
  styleUrls: ['./data-get.component.css']
})
export class DataGetComponent implements OnInit {
  
  @Input() product: Data[] | any;
  @Input() i: any;
  @Output() productDelete : EventEmitter<Data> = new EventEmitter();
  constructor() {
    
   }

  ngOnInit(): void {
    //console.log(this.data);
  }

  doDeleteProduct(product: Data) {
    this.productDelete.emit(product);
  }
  

 

}
