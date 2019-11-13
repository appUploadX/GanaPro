import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-visitor-details-modal',
  templateUrl: './visitor-details-modal.page.html',
  styleUrls: ['./visitor-details-modal.page.scss'],
})
export class VisitorDetailsModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

}
