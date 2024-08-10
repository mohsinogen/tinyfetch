import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddRequestModalComponent } from '../../components/add-request-modal/add-request-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modalCtrl: ModalController) {
    this.openModal()
  }

  async openModal() {
    const modal = await this.modalCtrl.create({
      component: AddRequestModalComponent,
      breakpoints:[0.5],
      initialBreakpoint: 0.5,
      backdropDismiss: true,
      showBackdrop: true,
      handle: false,
      cssClass: 'add-request-modal'
    });
    modal.present();

    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
     console.log('yes');
     
    }
  }

}
