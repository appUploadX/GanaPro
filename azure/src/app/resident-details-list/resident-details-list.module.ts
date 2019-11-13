import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ResidentDetailsListPage } from './resident-details-list.page';

const routes: Routes = [
  {
    path: '',
    component: ResidentDetailsListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ResidentDetailsListPage]
})
export class ResidentDetailsListPageModule {}
