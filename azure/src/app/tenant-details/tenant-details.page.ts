import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from '../../providers/post-providers';

@Component({
  selector: 'app-tenant-details',
  templateUrl: './tenant-details.page.html',
  styleUrls: ['./tenant-details.page.scss'],
})
export class TenantDetailsPage implements OnInit {
  tenants: any = []; 
  tenantCode: number;
  pUnitRoom: number;

  constructor(
    private postPvd: PostProvider,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) => 
      {
        this.tenantCode = data.tenantCode;
        this.pUnitRoom = data.pUnitRoom;
      }
    );
    this.loadData(this.tenantCode, this.pUnitRoom);
  }

  loadData(tenantCode, pUnitRoom)
  {
    return new Promise(resolve => {
      let body = {
        action: 'tenDetails',
        tenantCode: tenantCode,
        pUnitRoom: pUnitRoom,
      };

      this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data=>{
        // for(var i = 0; i < data['data'].length;i++){
          this.tenants.push(data['data']);
        // }
        resolve(true);


        console.log(data['data']);
      });
    });
  }

}
