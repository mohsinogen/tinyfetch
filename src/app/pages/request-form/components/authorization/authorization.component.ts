import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  authorizationTypes = [
    {
      title:'None',
      value:'',
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

  selectedAuthorization = this.authorizationTypes[0]['value'];

  onAuthTypeChange(ev:any){
    this.selectedAuthorization = ev.detail.value;
  }

}
