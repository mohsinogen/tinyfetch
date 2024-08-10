import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestFormPageRoutingModule } from './request-form-routing.module';

import { RequestFormPage } from './request-form.page';
import { QueryParamsComponent } from './components/query-params/query-params.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { BodyComponent } from './components/body/body.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestFormPageRoutingModule
  ],
  declarations: [RequestFormPage, QueryParamsComponent, AuthorizationComponent, BodyComponent]
})
export class RequestFormPageModule {}
