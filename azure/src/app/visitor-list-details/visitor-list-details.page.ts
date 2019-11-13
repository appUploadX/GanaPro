import { Component, OnInit } from '@angular/core';
import { VisitorDetailsModalPage } from '../visitor-details-modal/visitor-details-modal.page';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-visitor-list-details',
  templateUrl: './visitor-list-details.page.html',
  styleUrls: ['./visitor-list-details.page.scss'],
})
export class VisitorListDetailsPage implements OnInit {



  constructor(private modalController: ModalController) { }

  async openModal() {
    const modal = await this.modalController.create({
      component: VisitorDetailsModalPage
    });
    return await modal.present();
  }

  ngOnInit() {
  }

 

}
