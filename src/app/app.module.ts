import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StudentInformationComponent } from '../app/pages/components/student-information/student-information.component';
import { MaterialModule} from '../libs/uitoolkit/material-module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatNativeDateModule } from '@angular/material/core';
import { SectionComponent } from './shared/section/section/section.component';
import { SectionHeaderComponent } from './shared/section-header/section-header.component';
import { StudentDetailsService } from './services/student-details.service';


@NgModule({
  declarations: [
    AppComponent,
    StudentInformationComponent,
    SectionComponent,
    SectionHeaderComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    ReactiveFormsModule
  ],
  providers: [StudentDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
