import { Component, OnInit } from '@angular/core';
import { PermissionDataService } from './shared/permission-data.service';
import { Permission } from './shared/permission.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-12';

  constructor(private PermissionService: PermissionDataService) {}

  // permissionArray: any[] = this.PermissionService.permissionData;

  demo: Permission[] = [
    {
      name: 'Department',
      value: true,
      isDisable: true,
      icon: '<i class="bi bi-person-plus-fill"></i>',
      permissions: [
        {
          name: 'View Departments',
          value: true,
          isDisable: false,
        },
        {
          name: 'Manage Departments',
          value: false,
          isDisable: true,
        },
      ],
    },
  ];

  ngOnInit(): void {
    // console.log(this.permissionArray);
    this.PermissionService.deepTooglePermission(this.demo, true);

    console.log(console.log(this.PermissionService.defualtPermissions$));
  }
}
