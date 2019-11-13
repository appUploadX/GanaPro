import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AmenityBookingListPage } from './amenity-booking-list.page';

const routes: Routes = [
  {
    path: '',
    component: AmenityBookingListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AmenityBookingListPage]
})
export class AmenityBookingListPageModule {}
