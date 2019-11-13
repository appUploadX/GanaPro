import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { VisitorAddRequestModalPage } from '../visitor-add-request-modal/visitor-add-request-modal.page';

@Component({
  selector: 'app-visitor-add-request',
  templateUrl: './visitor-add-request.page.html',
  styleUrls: ['./visitor-add-request.page.scss'],
})
export class VisitorAddRequestPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async openModal() {
    const modal = await this.modalController.create({
      component: VisitorAddRequestModalPage
    });
    return await modal.present();
  }

}
