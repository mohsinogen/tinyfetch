import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { CommonService } from 'src/app/services/common.service';
import { HttpService } from 'src/app/services/http.service';
import { HttpMethod, QueryParam, TinyRequest } from 'src/app/types/global.types';

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.page.html',
  styleUrls: ['./request-form.page.scss'],
})
export class RequestFormPage implements OnInit {
  currentSegment: 'request'|'response'='request';
  onSegmentChange(ev:CustomEvent){
    
    this.currentSegment=ev.detail.value;
  }
  formType: 'new' | 'edit' = 'new';
  method: HttpMethod = 'GET';
  requestTitle: string = 'New Request';

  url: string= 'https://jsonplaceholder.typicode.com/todos/1';

  validMethods:HttpMethod[]=['GET','POST','PUT','DELETE']

  constructor(
    private route: ActivatedRoute,
    private alertController: AlertController,
    private common: CommonService,
    private http: HttpService
  ) {

    let type = this.route.snapshot.paramMap.get('type');
    let method = this.route.snapshot.paramMap.get('method');

    if ((type && type === 'new') || type === 'edit') {
      this.formType = type;
    }
    if(method && (method==='GET'|| method ==='POST' || method === 'PUT' || method==='DELETE')){
      this.method=method;
    }
  }

  async renameTitleHandler() {
    const alert = await this.alertController.create({
      header: 'Edit Title',
      inputs: [
        {
          placeholder: 'Title',
          value: this.requestTitle,
          attributes: {
            maxlength: 20,
          }
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
           
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: (data) => {
            if(data[0]!==''){
              this.requestTitle=data[0]
            }
          },
        },
      ],
    });

    await alert.present();
  }

  tabsOptions = [
    {
      title: 'Params'
    },
    {
      title: 'Authorization'
    },
    {
      title: 'Headers'
    },
    {
      title: 'Body'
    },
    {
      title: 'Settings'
    }
  ]
  currentTab=this.tabsOptions[1]['title'];

  onTabChange(ev:CustomEvent){
    
    this.currentTab=ev.detail.value;
  }

  

  onUrlChange(ev:any){
   // this.queryParams = this.common.getQueryParams(ev.detail.value);
  }

  addParamHandler(){
   /*  this.queryParams.push({
      key:'',
      value:'',
      isChecked: true,
    }) */
  }

  onMethodChange(ev:any){
    this.method=ev.detail.value;
  }

  makeRequestHandler(){
   /*  let httpRequest:TinyRequest = {
      url: this.url,
      method: this.method,
      queryParams: this.queryParams
    } 

    this.http.makeRequest(httpRequest).subscribe(
      {
        next:(value)=>{
          
          console.log('success 1',value);
        },
        error:(err)=>{
          console.log('failed',err);
          
        },
      }
    ) */
    
    
  }

  ngOnInit() {}
}
