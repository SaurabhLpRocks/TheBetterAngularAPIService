import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';


import { Injectable } from '@angular/core';
import { Headers, Http, Request, RequestOptions, Response, XHRBackend } from '@angular/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';


import { AppModule } from '../..';
import { appVariables } from '../../app.constants';
import { HelperService } from './helper.service';


@Injectable()
export class HttpService extends Http {
  helperService: HelperService;
  router: Router;
  constructor(backend: XHRBackend, options: RequestOptions) {
    super(backend, options);
    this.helperService = AppModule.injector.get(HelperService);
    this.router = AppModule.injector.get(Router);
  }


  request(url: string | Request, options?: RequestOptions): Observable<Response> {

    if (typeof url === 'string') {
      if (!options) {
        // let's make an option object
        options = new RequestOptions({ headers: new Headers() });
      }
      this.createRequestOptions(options);
    } else {
      this.createRequestOptions(url);
    }
    return super.request(url, options).catch(this.catchAuthError(this));
  }


  createRequestOptions(options: RequestOptions | Request) {
    const token: string = localStorage.getItem(appVariables.accessTokenLocalStorage);
    if (this.helperService.addContentTypeHeader && typeof this.helperService.addContentTypeHeader === 'string') {
      options.headers.append('Content-Type', this.helperService.addContentTypeHeader);
    } else {
      const contentTypeHeader: string = options.headers.get('Content-Type');
      if (!contentTypeHeader && this.helperService.addContentTypeHeader) {
        options.headers.append('Content-Type', appVariables.defaultContentTypeHeader);
      }
      options.headers.append('Authorization', token);
    }
  }
  catchAuthError(self: HttpService) {
    // we have to pass HttpService's own instance here as `self`return (res: Response) => {
    if (res.status === 401 || res.status === 403) {
      // if not authenticated
      localStorage.removeItem(appVariables.userLocalStorage);
      localStorage.removeItem(appVariables.accessTokenLocalStorage);
      this.router.navigate([appVariables.loginPageUrl]);
    }
    return Observable.throw(res);
  };
}
}