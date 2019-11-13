import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private router: Router) {}

  OpenVisitorListDetals() {
    this.router.navigateByUrl('/tabs/tab1/visitors-details/visitor-list-details')
  }

  openBookingDetails() {
    this.router.navigateByUrl('/tabs/tab1/amenities-details/amenity-booking-list/amenity-booking-details')
  }

  openRulesDetails() {
    this.router.navigateByUrl('/tabs/tab1/notice-main-list/notice-rules-list/notice-rules-details')
  }

}
