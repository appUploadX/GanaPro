import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-visitor-add-request-modal',
  templateUrl: './visitor-add-request-modal.page.html',
  styleUrls: ['./visitor-add-request-modal.page.scss'],
})
export class VisitorAddRequestModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  async closeModal() {
    await this.modalController.dismiss();
  }

}
