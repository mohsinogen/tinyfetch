import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  currentMimeType:'application/json'|'text/plain'|'application/xml'|'application/octet-stream'|'' = '';

  editorOptions = {theme: 'vs-dark', language: 'json', contextmenu: false};
  code: string= '{"test":"test value"}';

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
    if(ev.detail.value==='json'){
      this.currentMimeType='application/json';
    } else if(ev.detail.value==='text' || ev.detail.value==='raw'){
      this.currentMimeType='text/plain';
    } else if(ev.detail.value==='text'){
      this.currentMimeType='application/xml';
    }else if(ev.detail.value==='binary'){
      this.currentMimeType='application/octet-stream';
    }
  }

}
