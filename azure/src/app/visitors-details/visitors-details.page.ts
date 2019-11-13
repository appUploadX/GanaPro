import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-visitors-details',
  templateUrl: './visitors-details.page.html',
  styleUrls: ['./visitors-details.page.scss'],
})
export class VisitorsDetailsPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  OpenVisitorListDetals() {
    this.router.navigateByUrl('/tabs/tab1/visitors-details/visitor-list-details')
  }

  openAddVisitorRequest() {
    this.router.navigate(['/visitor-add-request'])
  }

}
