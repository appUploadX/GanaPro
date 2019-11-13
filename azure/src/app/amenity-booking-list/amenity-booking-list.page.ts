import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amenity-booking-list',
  templateUrl: './amenity-booking-list.page.html',
  styleUrls: ['./amenity-booking-list.page.scss'],
})
export class AmenityBookingListPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openBookingDetails() {
    this.router.navigateByUrl('/tabs/tab1/amenities-details/amenity-booking-list/amenity-booking-details')
  }

}
