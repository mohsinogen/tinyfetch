import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { HttpMethod } from 'src/app/types/global.types';

@Component({
  selector: 'app-add-request-modal',
  templateUrl: './add-request-modal.component.html',
  styleUrls: ['./add-request-modal.component.scss'],
})
export class AddRequestModalComponent  implements OnInit {

  constructor(private modalCtrl: ModalController, private router: Router) { }

  ngOnInit() {}

  closeModal(){
    this.modalCtrl.dismiss()
  }

  httpMethods:{title:HttpMethod, cssClass:string}[] = [
    {
      title:'GET',
      cssClass: 'get-item'
    },
    {
      title:'POST',
      cssClass: 'post-item'
    },
    {
      title:'PUT',
      cssClass: 'put-item'
    },
    {
      title:'DELETE',
      cssClass: 'delete-item'
    },
  ];


  newRequestHandler(method: HttpMethod){
    this.closeModal();
    this.router.navigateByUrl(`/request-form/new/${method}`)
  }

}
