import { HttpInterceptor, HttpHandler, HttpRequest, HttpEvent, HttpResponse, HttpErrorResponse }   from '@angular/common/http';
import { Injectable } from "@angular/core"
import { Observable, of } from "rxjs";
import { tap, catchError, map } from "rxjs/operators";
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/services/loader.service';
@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor(public toasterService: ToastrService,private loaderService: LoaderService) {}
intercept(
        req: HttpRequest<any>,
        next: HttpHandler
      ): Observable<HttpEvent<any>> {
    
        return next.handle(req).pipe(
            map(evt => {
                console.log(1)
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
                return evt;
            }),
            catchError((err: any) => {
                if(err instanceof HttpErrorResponse) {
                    try {
                        this.toasterService.error(err.error.messages.join(', '), "Error",);
                    } catch(e) {
                        this.toasterService.error('An error occurred', '');
                    }
                }
                return of(err);
            }));
      }
    }
      
