import { Injectable } from '@angular/core';
import {
    HttpErrorResponse,
    HttpResponse,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpEventType
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoaderService } from '../../services/loader.service';
import { tap, finalize } from 'rxjs/operators';
 
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    private requests: HttpRequest<any>[] = [];
    count = 0;
    constructor(private loaderService: LoaderService) { }
 
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.count++;
        return next.handle(request).pipe(
            tap(res => {
                if (res.type === HttpEventType.Sent) {
                    this.loaderService.loading$.next(true);
                }
            }), finalize(() => {
                this.count--;
                if ( this.count == 0 ) this.loaderService.loading$.next(false);
            })
        );
    }
}

// if (res.type === HttpEventType.Response) {
    
//     console.log('response received');
// }