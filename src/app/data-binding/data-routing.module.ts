import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataGetComponent } from './data-get/data-get.component';
import { DataComponent } from './data/data.component';

const routes: Routes = [
  {path: '', children:[
    {path:'', component: DataComponent},
    {path:'data-get', component: DataGetComponent}
    
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataRoutingModule { }
