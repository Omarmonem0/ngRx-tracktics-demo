import { Injectable } from '@angular/core';

import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
} from '@angular/common/http';

import { Observable} from 'rxjs';

@Injectable()
export class AuthHandler implements HttpInterceptor {
    constructor() {
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // tslint:disable-next-line: max-line-length
        const token = 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vdHJhY2t0aWNzLnpvbmUiLCJqdGkiOiJBZ0xmeW85TyIsImlhdCI6MTU5NDgzNzc1NiwiZXhwIjoxNTk0ODQxMzU2LCJ1c2VySWQiOiJzdDdZYyIsInJvbGVJZCI6MjAwLCJpc1JlZnJlc2hUb2tlbiI6ZmFsc2V9.NaoyZ3bMJpin8xb2M9F1unekUv3NrEJESeMB0DaJSdM';
        const sessionReq = request.clone({
            headers: request.headers.set('AUTHORIZATION' , token)
          });
        return next.handle(sessionReq);
    }
}
