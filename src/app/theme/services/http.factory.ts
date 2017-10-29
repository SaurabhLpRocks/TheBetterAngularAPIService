import { XHRBackend, RequestOptions } from '@angular/http';

import { HttpService } from './http.service';
import { HelperService } from './helper.service';

export function HttpFactory(backend: XHRBackend, options: RequestOptions) {
    return new HttpService(backend, options);
}
