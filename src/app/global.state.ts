import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GlobalState {

  public _data = new Subject<Object>();
  public _dataStream$ = this._data.asObservable();

  public _subscriptions: Map<string, Function[]> = new Map<string, Function[]>();

  constructor() {
    this._dataStream$.subscribe((data) => this._onEvent(data));
  }

  notifyDataChanged(event, value) {

    const current = this._data[event];
    if (current !== value) {
      this._data[event] = value;

      this._data.next({
        event,
        data: this._data[event],
      });
    }
  }

  subscribe(event: string, callback: Function) {
    const subscribers = this._subscriptions.get(event) || [];
    subscribers.push(callback);
    this._subscriptions.set(event, subscribers);
  }

  _onEvent(data: any) {
    const subscribers = this._subscriptions.get(data['event']) || [];
    subscribers.forEach((callback) => {
      callback.call(null, data['data']);
    });
  }
}
