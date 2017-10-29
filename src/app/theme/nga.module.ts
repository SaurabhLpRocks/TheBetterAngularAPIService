import { BaMenuItemComponent } from './components/baMenu/components/baMenuItem/baMenuItem.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgUploaderModule } from 'ngx-uploader';
import { SnotifyModule, SnotifyService } from 'ng-snotify';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { IonRangeSliderModule } from 'ng2-ion-range-slider';

import {
  ImageLoaderService,
  MenuService,
  ThemePreloader,
  ThemeSpinner,
  TostNotificationService,
  CustomErrorHandlerService,
  ResourceAccessService,
  HelperService,
} from './services';

const NGA_SERVICES = [
  ImageLoaderService,
  ThemePreloader,
  ThemeSpinner,
  MenuService,
  TostNotificationService,
  CustomErrorHandlerService,
  ResourceAccessService,
  HelperService,
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgUploaderModule,
    SnotifyModule,
    SlimLoadingBarModule.forRoot(),
    IonRangeSliderModule,
  ],
  exports: [
    SnotifyModule,
    SlimLoadingBarModule,
    IonRangeSliderModule,
  ],
})
export class NgaModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: NgaModule,
      providers: [
        ...NGA_SERVICES,
        SnotifyService,
      ],
    };
  }
}
