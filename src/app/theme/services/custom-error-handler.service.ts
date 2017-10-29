import { Injectable } from '@angular/core';
import { Response, ResponseOptions } from '@angular/http';


import { Error } from '../interfaces';
import { TostNotificationService } from './toast-notification.service';


@Injectable()
export class CustomErrorHandlerService {
  constructor(public snotify: TostNotificationService) { }


  tryParseError(error: Response): any {
    try {
      return error.json().error;
    } catch (ex) {
      try {
        return error;
      } catch (ex) {
        return error.toString();
      }
    }
  }


  parseCustomServerError(error: Error): any {
    const title = error.message;
    let body = '';
    for (const errorMsg of error.error) {
      body += `${errorMsg}. `;
    }


    return { title, body };
  }


  createCustomError(error: Error): Response {
    try {
      const parsedError = this.parseCustomServerError(error);
      const responseOptions = new ResponseOptions({
        body: { error: { title: parsedError.title, message: parsedError.body } },
        status: 400,
        headers: null,
        url: null,
      });
      return new Response(responseOptions);
    } catch (ex) {
      const responseOptions = new ResponseOptions({
        body: { title: 'Unknown Error!', message: 'Unknown Error Occurred.' },
        status: 400,
        headers: null,
        url: null,
      });
      return new Response(responseOptions);
    }
  }


  showToast(error: Error): void {
    const parsedError = this.parseCustomServerError(error);
    this.snotify.toastConfig.title = parsedError.title;
    this.snotify.toastConfig.body = parsedError.body;
    this.snotify.toastConfig.bodyMaxLength = 100;
    this.snotify.onError();
  }


  parseCustomServerErrorToString(error: Error): string {
    this.showToast(error);
    const parsedError = this.createCustomError(error);
    try {
      return JSON.stringify(this.tryParseError(parsedError));
    } catch (ex) {
      try {
        return error.error.toString();
      } catch (error) {
        return error.toString();
      }
    }
  }
}