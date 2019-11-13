import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NoticeMainListPage } from './notice-main-list.page';

const routes: Routes = [
  {
    path: '',
    component: NoticeMainListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NoticeMainListPage]
})
export class NoticeMainListPageModule {}
