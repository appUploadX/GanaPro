import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VisitorAddRequestModalPage } from './visitor-add-request-modal.page';

const routes: Routes = [
  {
    path: '',
    component: VisitorAddRequestModalPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VisitorAddRequestModalPage]
})
export class VisitorAddRequestModalPageModule {}
