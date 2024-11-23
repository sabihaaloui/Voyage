import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VoyagesComponent } from './voyages/voyages.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  {path:"",component:VoyagesComponent},

  {path:"voyage",component:VoyagesComponent},
  {path:"reservation",component:ReservationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
