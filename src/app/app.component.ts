import { AfterViewInit, Component, ViewContainerRef } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { SlimLoadingBarService } from 'ng2-slim-loading-bar';

import { appVariables } from './app.constants';
import { userRoleDefaultPages } from './app.constants';
import { GlobalState } from './global.state';
import { TostNotificationService } from './theme';
import { ImageLoaderService, ThemePreloader, ThemeSpinner } from './theme/services';
import { HelperService } from './theme/services';

/*
 * App Component
 * Top Level Component
 */
@Component({
  selector: 'app',
  styleUrls: ['./app.component.scss'],
  providers: [GlobalState, HelperService],
  template: `
<app-snotify></app-snotify>
<ng2-slim-loading-bar [color]="ng2SlimLoadingBarColor" [height]="ng2SlimLoadingBarHeight"></ng2-slim-loading-bar>
    <main [class.menu-collapsed]="isMenuCollapsed" baThemeRun>
      <div class="additional-bg"></div>
      <router-outlet></router-outlet>
    </main>
  `,
})
export class App implements AfterViewInit {
  ng2SlimLoadingBarColor: string = appVariables.ng2SlimLoadingBarColor;
  ng2SlimLoadingBarHeight: string = appVariables.ng2SlimLoadingBarHeight;
  isMenuCollapsed: boolean = false;

  constructor(public state: GlobalState,
    public _imageLoader: ImageLoaderService,
    public _spinner: ThemeSpinner,
    public viewContainerRef: ViewContainerRef,
    public themeConfig: BaThemeConfig,
    public snotify: TostNotificationService,
    public helperService: HelperService,
    public router: Router) {
    themeConfig.config();

    this.state.subscribe('menu.isCollapsed', (isCollapsed) => {
      this.isMenuCollapsed = isCollapsed;
    });

    ThemePreloader.registerLoader(this.handleNavigation());
    this.helperService.setMenuAccessesFromJwtToken();
    this.helperService.resourceActionAccessMap = this.helperService.createResourceActionAccessMapFromJwtToken();
  }

  handleNavigation(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      this.router.events
        .subscribe((event) => {
          if (event instanceof NavigationStart) {
            // this.handleDefaultRouting();
          } else if (event instanceof NavigationEnd) {
            this.handleDefaultRouting(event);
            setTimeout(() => {
              resolve(true);
            }, 500);
          }
        }, (error) => {
          reject(true);
        });
    });
  }

  handleDefaultRouting(event: NavigationEnd): void {
    if (!this.helperService.isUserLoggedIn() && !this.helperService.isRegistrationPage(event.urlAfterRedirects)) {
      this.router.navigate([appVariables.loginPageUrl]);
      // window.location.href = appVariables.loginPageUrl;
    } else {

    }
  }

  ngAfterViewInit(): void {
    // hide spinner once all loaders are completed
    ThemePreloader.load().then((values) => {
      this._spinner.hide();
      // this.snotify.onSuccess();
      this.state.notifyDataChanged('snotify', 'onSuccess');
    });

  }


}
