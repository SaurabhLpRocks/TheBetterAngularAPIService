import { Injectable } from '@angular/core';

@Injectable()
export class ThemePreloader {

  static loaders: Promise<any>[] = [];

  static registerLoader(method: Promise<any>): void {
    ThemePreloader.loaders.push(method);
  }

  static clear(): void {
    ThemePreloader.loaders = [];
  }

  static load(): Promise<any> {
    return new Promise((resolve, reject) => {
      ThemePreloader._executeAll(resolve);
    });
  }

  public static _executeAll(done: Function): void {
    setTimeout(() => {
      Promise.all(ThemePreloader.loaders).then((values) => {
        done.call(null, values);

      }).catch((error) => {
        console.error(error);
      });
    });
  }
}
