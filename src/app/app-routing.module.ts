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
// import { AuthGuard } from './permissions/permissions.auth.guard';
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
    // canActivate: [AuthGuard],
  },
  {
    path: 'candidate',
    component: CandidateComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'reports',
    component: ReportsComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'job',
    component: JobComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'hire',
    component: HireComponent,
    // canActivate: [AuthGuard],
  },
  {
    path: 'department',
    component: DepartmentsComponent,
    // canActivate: [AuthGuard],
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
