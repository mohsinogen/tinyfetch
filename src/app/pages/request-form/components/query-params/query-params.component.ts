import { Component, OnInit } from '@angular/core';
import { QueryParam } from 'src/app/types/global.types';

@Component({
  selector: 'query-params',
  templateUrl: './query-params.component.html',
  styleUrls: ['./query-params.component.scss'],
})
export class QueryParamsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

  queryParams: QueryParam[] = [
  ]

  addParamHandler(){
     this.queryParams.push({
       key:'',
       value:'',
       isChecked: true,
     })
   }
}
