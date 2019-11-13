import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from '../../providers/post-providers';

@Component({
  selector: 'app-resident-details-individual',
  templateUrl: './resident-details-individual.page.html',
  styleUrls: ['./resident-details-individual.page.scss'],
})
export class ResidentDetailsIndividualPage implements OnInit {
  users: any = []; 
  id: number;
  pUnitCode: number;

  constructor(
    private postPvd: PostProvider,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.actRoute.params.subscribe((data: any) => 
      {
        this.id = data.id;
        this.pUnitCode = data.pUnitCode;
        console.log(data);
      }
    );

    this.loadData(this.id, this.pUnitCode);
  }

  loadData(id, pUnitRoom)
  {
    return new Promise(resolve => {
      let body = {
        action: 'occDetails',
        id: id,
        pUnitCode: this.pUnitCode,
      };

      this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data=>{
        this.users.push(data['data']);
        resolve(true);
        console.log(data['data']);
      });
    });
  }

}
