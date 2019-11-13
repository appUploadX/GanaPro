import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AmenityBookNowPage } from './amenity-book-now.page';

const routes: Routes = [
  {
    path: '',
    component: AmenityBookNowPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AmenityBookNowPage]
})
export class AmenityBookNowPageModule {}
