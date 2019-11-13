import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notice-rules-list',
  templateUrl: './notice-rules-list.page.html',
  styleUrls: ['./notice-rules-list.page.scss'],
})
export class NoticeRulesListPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openRulesDetails() {
    this.router.navigateByUrl('/tabs/tab1/notice-main-list/notice-rules-list/notice-rules-details')
  }

}
