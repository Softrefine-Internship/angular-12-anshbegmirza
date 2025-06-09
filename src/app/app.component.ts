import { Component, OnInit } from '@angular/core';
import { PermissionDataService } from './shared/permission-data.service';
import { Permission } from './shared/permission.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-12';

  constructor(private PermissionService: PermissionDataService) {}

  // permissionArray: any[] = this.PermissionService.permissionData;

  routes = [
    {
      path: '/permissions',
      name: 'Permissions',
      icon: 'bi bi-bar-chart-steps',
    },
    {
      path: '/settings',
      name: 'Settings',
      icon: 'bi bi-gear-fill',
    },
    {
      path: '/candidate',
      name: 'Candidate',
      icon: 'bi bi-person-fill',
    },
    {
      path: '/reports',
      name: 'Reports',
      icon: 'bi bi-journal-bookmark-fill',
    },
    {
      path: '/job',
      name: 'Job',
      icon: 'bi bi-briefcase-fill',
    },
    {
      path: '/hire',
      name: 'Hire',
      icon: 'bi bi-person-plus-fill',
    },
    {
      path: '/departments',
      name: 'Departments',
      icon: 'bi bi-check2-circle',
    },
  ];

  // ngOnInit(): void {
  //   // console.log(this.permissionArray);
  //   this.PermissionService.deepTooglePermission(this.demo, true);

  //   console.log(console.log(this.PermissionService.defualtPermissions$));
  // }
}
