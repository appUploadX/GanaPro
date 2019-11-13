import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VisitorAddRequestPage } from './visitor-add-request.page';
import { VisitorAddRequestModalPage } from '../visitor-add-request-modal/visitor-add-request-modal.page';

const routes: Routes = [
  {
    path: '',
    component: VisitorAddRequestPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VisitorAddRequestPage, VisitorAddRequestModalPage],
  entryComponents: [VisitorAddRequestModalPage]
})
export class VisitorAddRequestPageModule {}
