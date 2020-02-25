import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentInformationComponent } from '../app/pages/components/student-information/student-information.component';
import { MaterialModule} from '../libs/uitoolkit/material-module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { SectionComponent } from './shared/section/section/section.component';
import { SectionHeaderComponent } from './shared/section-header/section-header.component';
import { StudentDetailsService } from './services/student-details.service';
import { AgGridModule } from 'ag-grid-angular';
import { StudentDetailsComponent } from './pages/components/student-details/student-details.component';
import { ServiceListService } from './services/service-list.service';
import { DialogHeaderComponent } from './shared/dialog-header/dialog-header.component';
import { StudentDialogComponent } from './pages/components/student-dialog/student-dialog.component';
import { AppHttpInterceptor } from './shared/Interceptors/response.interceptor';
import { ToastrModule } from 'ngx-toastr';
import { LoaderComponent } from './pages/components/loader/loader.component';
import { LoaderService } from './services/loader.service';
import { LoaderInterceptor } from './shared/Interceptors/loading.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    StudentInformationComponent,
    SectionComponent,
    SectionHeaderComponent,
    StudentDetailsComponent,
    DialogHeaderComponent,
    StudentDialogComponent,
    LoaderComponent

  ],
  entryComponents: [StudentDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
    ToastrModule.forRoot()
  ],
  providers: [StudentDetailsService,ServiceListService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AppHttpInterceptor, multi: true }   
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
