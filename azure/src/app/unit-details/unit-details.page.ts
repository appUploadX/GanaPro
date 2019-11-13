import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PostProvider } from 'src/providers/post-providers';

@Component({
  selector: 'app-unit-details',
  templateUrl: './unit-details.page.html',
  styleUrls: ['./unit-details.page.scss'],
})
export class UnitDetailsPage implements OnInit {
  users: any = [];

  constructor(
    private postPvd: PostProvider,
    private router: Router
  ) { }

  ngOnInit() {
    this.loadData();
  }

  openTenantDetailsInTabs(tenantCode, pUnitRoom){
    this.router.navigateByUrl('/tabs/tab1/unit-details/tenant-details/'+tenantCode+'/'+pUnitRoom)
  }

  openResidentDetailsListInTabs(unit_code, condition, pUnitRoom) {
    this.router.navigateByUrl('/tabs/tab1/unit-details/resident-details-list/'+ unit_code +'/'+ condition +'/'+ pUnitRoom)
  }

  openOldTenantDetails(unit_code) {
    this.router.navigateByUrl('/tabs/tab1/unit-details/old-tenant-details/'+ unit_code)
  }

  openParkingDetails(property_code, floorNo, roomNo, propertyBuilding) {
    this.router.navigateByUrl('/tabs/tab1/unit-details/parking-details/'+property_code+'/'+floorNo+'/'+roomNo+'/'+propertyBuilding)
  }

  loadData()
  {
    return new Promise(resolve => {
      let body = {
        action: 'userDetails',
      };

      this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data=>{
        this.users.push(data['result']);
        resolve(true);


        console.log(data['result']);
      });
    });
  }

}
