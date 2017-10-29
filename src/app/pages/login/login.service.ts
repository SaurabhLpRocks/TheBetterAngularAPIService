import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';


import { appApiResources } from '../../app.constants';
import { LoginResponse } from '../../theme/interfaces/login-response.interface';
import { HelperService } from '../../theme/services';
import { BaseService } from '../../theme/services/base.service';
@Injectable()
export class LoginService {
  constructor(public http: BaseService, public helperService: HelperService) {
  }
  login(postBody: any): Observable<LoginResponse> {
    // "appApiResources.login" is the constant string containing login api urlreturn this.http.post(appApiResources.login, body)
      .map((res: LoginResponse) => {
      this.processLoginResponse(res);
      return res;
    })
      .catch((error: Response) => Observable.throw(error))
      .finally(() => {
      });
  }
}