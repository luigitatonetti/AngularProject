import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './components/main/main.component';
import { JobComponent } from './components/job/job.component';
import { JobDetailComponent } from './components/job-detail/job-detail.component';
import { CompanyDetailComponent } from './components/company-detail/company-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    JobComponent,
    JobDetailComponent,
    CompanyDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
