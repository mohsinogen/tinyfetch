import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  contentTypes = [
    {
      title:'None',
      value:'',
    },
    {
      title:'JSON',
      value:'json',
    },
    {
      title:'Text',
      value:'text',
    },
    {
      title:'XML',
      value:'xml',
    },
    {
      title:'Raw',
      value:'raw',
    },
    {
      title:'Multipart',
      value:'multipart',
    },
    {
      title:'Urlencode',
      value:'urlencode',
    },
    {
      title:'Binary',
      value:'binary',
    },
  ];

  selectedType = this.contentTypes[0]['value'];

  onContentTypeChange(ev:any){
    this.selectedType = ev.detail.value;
  }

}
