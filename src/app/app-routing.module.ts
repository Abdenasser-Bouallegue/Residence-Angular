import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceComponent } from './residence/residence.component';
import { CardresidenceComponent } from './cardresidence/cardresidence.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { ShowappartComponent } from './showappart/showappart.component';
const ROUTES:Routes =[
  {path:'',redirectTo:"home",pathMatch:"full"},
  {path:"home",component:ResidenceComponent},
  {path:"card",component:CardresidenceComponent},
  {path:"card/showappart/:id",component:ShowappartComponent},
  {path:"**",component:PagenotfoundComponent}

  
  
];


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(ROUTES)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
