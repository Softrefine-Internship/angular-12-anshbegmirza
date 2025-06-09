import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { SettingsComponent } from './Pages/settings/settings.component';
import { CandidateComponent } from './Pages/candidate/candidate.component';
import { ReportsComponent } from './Pages/reports/reports.component';
import { JobComponent } from './Pages/job/job.component';
import { HireComponent } from './Pages/hire/hire.component';
import { DepartmentsComponent } from './Pages/departments/departments.component';
import { PermissionsComponent } from './permissions/permissions.component';
import { ErrorMessageComponent } from './Pages/error-message/error-message.component';

import { CdkAccordionModule } from '@angular/cdk/accordion';
import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
@NgModule({
  declarations: [
    AppComponent,
    SettingsComponent,
    CandidateComponent,
    ReportsComponent,
    JobComponent,
    HireComponent,
    DepartmentsComponent,
    PermissionsComponent,
    ErrorMessageComponent,
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatSidenavModule,
    AppRoutingModule,
    CdkAccordionModule,
    MatExpansionModule,
    MatSlideToggleModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
