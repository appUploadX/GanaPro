import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { NoticeRulesListPage } from './notice-rules-list.page';

const routes: Routes = [
  {
    path: '',
    component: NoticeRulesListPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [NoticeRulesListPage]
})
export class NoticeRulesListPageModule {}
