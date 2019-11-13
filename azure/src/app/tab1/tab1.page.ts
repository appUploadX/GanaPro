import { Component } from '@angular/core';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(private router: Router) {}

  openUnitDetailsInTabs() {
    this.router.navigateByUrl('/tabs/tab1/unit-details');
  }

  openVisitorsInTabs() {
    this.router.navigateByUrl('/tabs/tab1/visitors-details');
  }

  openNoticeInTabs() {
    this.router.navigateByUrl('/tabs/tab1/notice-main-list');
  }

  openAmenitiesInTabs() {
    this.router.navigateByUrl('tabs/tab1/amenities-details')
  }

}
