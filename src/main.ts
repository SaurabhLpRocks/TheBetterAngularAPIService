import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.env === 'prod' ) {
    enableProdMode();
}
platformBrowserDynamic().bootstrapModule(AppModule);
