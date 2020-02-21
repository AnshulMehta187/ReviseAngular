import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse }   from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(public toasterService: ToastrService) {}
intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
    
        return next.handle(req).pipe(
            map(evt => {
                if (evt instanceof HttpResponse) {
                    if(evt.body && evt.body.statusCode == "200")
                    { 
                        if(!(evt.url.indexOf('Get') > -1))
                        {
                            this.toasterService.success(evt.body.messages[0], "Success");
                        }
                        return evt.clone({ body: evt.body.result });
                    }                   
                }
            }),
            catchError((err: any) => {
                if(err instanceof HttpErrorResponse) {
                    try {
                        this.toasterService.error(err.error.messages.join(', '), "Error",);
                    } catch(e) {
                        this.toasterService.error('An error occurred', '', { positionClass: 'toast-bottom-center' });
                    }
                }
                return of(err);
            }));
      }
    }
      
