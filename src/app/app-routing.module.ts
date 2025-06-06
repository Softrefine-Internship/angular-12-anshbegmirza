import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { SettingsComponent } from './Pages/settings/settings.component';
import { CandidateComponent } from './Pages/candidate/candidate.component';
import { ReportsComponent } from './Pages/reports/reports.component';
import { JobComponent } from './Pages/job/job.component';
import { HireComponent } from './Pages/hire/hire.component';
import { DepartmentsComponent } from './Pages/departments/departments.component';
import { ErrorMessageComponent } from './Pages/error-message/error-message.component';
import { PermissionsComponent } from './permissions/permissions.component';
const routes: Route[] = [
  {
    path: '',
    redirectTo: '/permissions',
    pathMatch: 'full',
  },
  {
    path: 'permissions',
    component: PermissionsComponent,
  },
  {
    path: 'settings',
    component: SettingsComponent,
  },
  {
    path: 'candidate',
    component: CandidateComponent,
  },
  {
    path: 'reports',
    component: ReportsComponent,
  },
  {
    path: 'job',
    component: JobComponent,
  },
  {
    path: 'Hire',
    component: HireComponent,
  },
  {
    path: 'Departments',
    component: DepartmentsComponent,
  },
  {
    path: 'not-found',
    component: ErrorMessageComponent,
  },
  {
    path: '**',
    redirectTo: '/not-found',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
