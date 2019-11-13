import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amenities-details',
  templateUrl: './amenities-details.page.html',
  styleUrls: ['./amenities-details.page.scss'],
})
export class AmenitiesDetailsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openAzureBeach() {
    this.router.navigateByUrl('/tabs/tab1/amenities-details/amenity-info')
  }

  openBookingList() {
    this.router.navigateByUrl('/tabs/tab1/amenities-details/amenity-booking-list')
  }

}
