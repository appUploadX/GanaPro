import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AmenityBookingDetailsPage } from './amenity-booking-details.page';

const routes: Routes = [
  {
    path: '',
    component: AmenityBookingDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AmenityBookingDetailsPage]
})
export class AmenityBookingDetailsPageModule {}
