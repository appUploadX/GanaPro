import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-amenity-info',
  templateUrl: './amenity-info.page.html',
  styleUrls: ['./amenity-info.page.scss'],
})
export class AmenityInfoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  openAmenityBookNow() {
    this.router.navigateByUrl('/tabs/tab1/amenities-details/amenity-info/amenity-book-now')
  }

}
