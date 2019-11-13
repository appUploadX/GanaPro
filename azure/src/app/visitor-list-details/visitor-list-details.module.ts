import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VisitorListDetailsPage } from './visitor-list-details.page';
import { VisitorDetailsModalPage } from '../visitor-details-modal/visitor-details-modal.page';

const routes: Routes = [
  {
    path: '',
    component: VisitorListDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VisitorListDetailsPage, VisitorDetailsModalPage],
  entryComponents: [VisitorDetailsModalPage]
})
export class VisitorListDetailsPageModule {}
