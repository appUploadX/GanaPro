import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from '../../providers/post-providers';

@Component({
  selector: 'app-parking-details',
  templateUrl: './parking-details.page.html',
  styleUrls: ['./parking-details.page.scss'],
})
export class ParkingDetailsPage implements OnInit {
  users: any = [];
  property_code: number;
  floorNo: number;
  roomNo: number;
  propertyBuilding: string;

  constructor(
    private postPvd: PostProvider,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }
  
  ngOnInit() {
    this.actRoute.params.subscribe((data: any) => 
      {
        this.property_code = data.property_code;
        this.floorNo = data.floorNo;
        this.roomNo = data.roomNo;
        this.propertyBuilding = data.propertyBuilding;
        console.log(data);
      }
    );

    this.loadData(this.property_code, this.floorNo, this.roomNo, this.propertyBuilding);
  }

  loadData(property_code, floorNo, roomNo, propertyBuilding)
  {
    return new Promise(resolve => {
      let body = {
        action: 'parkDetails',
        property_code: property_code,
        floorNo: floorNo,
        roomNo: roomNo,
        propertyBuilding: propertyBuilding,
      };

      this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data=>{
        for(var i = 0; i < data['result'].length;i++){
          this.users.push(data['result']);
        }
        resolve(true);
        console.log(data['result']);
      });
    });
  }

}
