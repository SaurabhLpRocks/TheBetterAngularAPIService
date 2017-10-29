import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppTranslationModule } from '../../app.translation.module';
import { HttpService } from '../../theme/';
import { NgaModule } from '../../theme/nga.module';
import { LoginComponent } from './login.component';
import { routing } from './login.routing';


@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing,
  ],
  declarations: [
    LoginComponent,
  ],
  providers: [
    HttpService,
  ],
})
export class LoginModule { }
