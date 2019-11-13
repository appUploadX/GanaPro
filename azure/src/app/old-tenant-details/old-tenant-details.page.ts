import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from '../../providers/post-providers';

@Component({
  selector: 'app-old-tenant-details',
  templateUrl: './old-tenant-details.page.html',
  styleUrls: ['./old-tenant-details.page.scss'],
})
export class OldTenantDetailsPage implements OnInit {
  users: any = [];
  unit_code: number;

  constructor(
    private postPvd: PostProvider,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }
  
  ngOnInit() {
    this.actRoute.params.subscribe((data: any) => 
      {
        this.unit_code = data.unit_code;
        console.log(data);
      }
    );

    this.loadData(this.unit_code);
  }

  loadData(unit_code)
  {
    return new Promise(resolve => {
      let body = {
        action: 'oldDetails',
        unit_code: unit_code,
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
