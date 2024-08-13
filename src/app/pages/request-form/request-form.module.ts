import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RequestFormPageRoutingModule } from './request-form-routing.module';

import { RequestFormPage } from './request-form.page';
import { QueryParamsComponent } from './components/query-params/query-params.component';
import { AuthorizationComponent } from './components/authorization/authorization.component';
import { BodyComponent } from './components/body/body.component';
import { MonacoEditorModule, } from 'ngx-monaco-editor-v2';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RequestFormPageRoutingModule,
    MonacoEditorModule
  ],
  declarations: [RequestFormPage, QueryParamsComponent, AuthorizationComponent, BodyComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RequestFormPageModule {}
