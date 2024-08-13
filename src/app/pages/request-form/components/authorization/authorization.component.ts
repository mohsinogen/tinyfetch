import { Component, OnInit } from '@angular/core';
import { Authorization } from 'src/app/types/global.types';

@Component({
  selector: 'authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  authorizationTypes: {title: string, value: "basic" | "bearer" | "api-key"| null}[] = [
    {
      title:'None',
      value:null,
    },
    {
      title:'Basic Auth',
      value:'basic',
    },
    {
      title:'Bearer Token',
      value:'bearer',
    },
    {
      title:'API Key',
      value:'api-key',
    },
  ];

  selectedAuthorization: "basic" | "bearer" | "api-key"|null = this.authorizationTypes[0]['value'];

  onAuthTypeChange(ev:any){
    this.selectedAuthorization = ev.detail.value;
  }

  authData: Authorization = {
    authType: this.selectedAuthorization,
    apiAuth: {
      key: '',
      value: '',
      passBy: 'header'
    },
    basicAuth: {
      password: '',
      username: ''
    },
    token: ''
  }

  getAuthorizationData(){
    return this.authData;
  }
}
