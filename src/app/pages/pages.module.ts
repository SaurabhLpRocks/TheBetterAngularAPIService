import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';

import { PagesComponent } from './pages.component';
import { MenuService } from '../theme';
import { BaseService } from './../theme/services/base.service';
import { HttpService } from './../theme/services/http.service';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    routing,
  ],
  declarations: [
    PagesComponent,
  ],
  providers: [BaseService, HttpService],
})
export class PagesModule {
}
