import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AuthGuardService } from "src/app/admin/auth-guard.service";
import { UserComponent } from "./user/user.component";


const routes: Routes = [
  
  {path: '', component: UserComponent},
  {path: 'index', component: UserComponent},
  {path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  {path: 'data-binding', loadChildren: () => import('./data-binding/data.module').then(m => m.DataModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    AuthGuardService
  ]
})
export class AppRoutingModule {
  
}
export const routingComponents = [UserComponent]
