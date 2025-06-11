import { Component, OnInit } from '@angular/core';
import { PermissionDataService } from './shared/permission-data.service';
import { Permission } from './shared/permission.model';
import { map } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-12';

  constructor(private PermissionService: PermissionDataService) {}

  // permissionArray: any[] = this.PermissionService.permissionData;
  permission: Permission[] = [];
  routes: any[] = [];
  // routes = [
  // {
  //   path: '/permissions',
  //   name: 'Permissions',
  //   icon: 'bi bi-bar-chart-steps',
  //   value: true,
  // },
  //   {
  //     path: '/job',
  //     name: 'Job',
  //     icon: 'bi bi-briefcase-fill',
  //     value: true,
  //   },
  //   {
  //     path: '/candidate',
  //     name: 'Candidate',
  //     icon: 'bi bi-person-fill',
  //     value: true,
  //   },
  //   {
  //     path: '/settings',
  //     name: 'Settings',
  //     icon: 'bi bi-gear-fill',
  //     value: true,
  //   },

  //   {
  //     path: '/reports',
  //     name: 'Reports',
  //     icon: 'bi bi-journal-bookmark-fill',
  //     value: false,
  //   },
  //   {
  //     path: '/hire',
  //     name: 'Hire',
  //     icon: 'bi bi-person-plus-fill',
  //     value: false,
  //   },
  //   {
  //     path: '/departments',
  //     name: 'Departments',
  //     icon: 'bi bi-check2-circle',
  //     value: true,
  //   },
  // ];

  ngOnInit(): void {
    this.PermissionService.getActiveModules().subscribe((modules: any[]) => {
      console.log(...modules);

      const newRoutes = modules.map((mod) => {
        return {
          name: mod.name ?? 'unknown',
          path: `/${mod.name?.toLowerCase()}`,
          icon: mod.icon.replace() ?? 'bi bi-question-circle',
          value: mod.value ?? false,
        };
      });
      console.log(newRoutes);

      this.routes = [
        {
          path: '/permissions',
          name: 'Permissions',
          icon: 'bi bi-bar-chart-steps',
          value: true,
        },
        ...newRoutes,
      ];
    });
  }
}
