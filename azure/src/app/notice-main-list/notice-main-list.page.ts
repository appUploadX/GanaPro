import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notice-main-list',
  templateUrl: './notice-main-list.page.html',
  styleUrls: ['./notice-main-list.page.scss'],
})
export class NoticeMainListPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openRulesList() {
    this.router.navigateByUrl('/tabs/tab1/notice-main-list/notice-rules-list');
  }

}
