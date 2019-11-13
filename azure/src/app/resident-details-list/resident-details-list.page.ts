import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { PostProvider } from '../../providers/post-providers';

@Component({
  selector: 'app-resident-details-list',
  templateUrl: './resident-details-list.page.html',
  styleUrls: ['./resident-details-list.page.scss'],
})
export class ResidentDetailsListPage implements OnInit {
  users: any = []; 
  unit_code: number;
  condition: string;
  pUnitRoom: number;


  constructor(
    private postPvd: PostProvider,
    private router: Router,
    private actRoute: ActivatedRoute
  ) { }
  ngOnInit() {
    this.actRoute.params.subscribe((data: any) => 
      {
        this.unit_code = data.unit_code;
        this.condition = data.condition;
        this.pUnitRoom = data.pUnitRoom;
        console.log(data);
      }
    );

    this.loadData(this.unit_code, this.condition);
  }

  openResidentDetailsIndividual(id, pUnitRoom){
    this.router.navigate(['/resident-details-individual/'+ id +'/'+ pUnitRoom])
  }

  loadData(unit_code, condition)
  {
    return new Promise(resolve => {
      let body = {
        action: 'resDetails',
        condition: condition,
        unit_code: unit_code,
      };

      this.postPvd.postData(body, 'https://www.asi-ph.com/sandboxes/testAndroid/CondoProcess/').subscribe(data=>{
        for(var i = 0; i < data['data'].length;i++){
          this.users.push(data['data']);
        }
        resolve(true);
        console.log(data['data']);
      });
    });
  }



}
