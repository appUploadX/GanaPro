import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AmenityInfoPage } from './amenity-info.page';

const routes: Routes = [
  {
    path: '',
    component: AmenityInfoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AmenityInfoPage]
})
export class AmenityInfoPageModule {}
