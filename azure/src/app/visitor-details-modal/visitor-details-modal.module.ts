import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VisitorDetailsModalPage } from './visitor-details-modal.page';

const routes: Routes = [
  {
    path: '',
    component: VisitorDetailsModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VisitorDetailsModalPage]
})
export class VisitorDetailsModalPageModule {}
