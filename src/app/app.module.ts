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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
