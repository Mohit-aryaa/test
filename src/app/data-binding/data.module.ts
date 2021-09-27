import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataRoutingModule } from './data-routing.module';
import { DataGetComponent } from './data-get/data-get.component';
import { RouterModule } from '@angular/router';
import { DataComponent } from './data/data.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    DataGetComponent,
    DataComponent
    
  ],
  imports: [
    CommonModule,
    DataRoutingModule,
    RouterModule,
    FormsModule
  ]
})
export class DataModule { }
