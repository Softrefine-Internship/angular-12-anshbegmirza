import { Component } from '@angular/core';
import { PermissionDataService } from 'src/app/shared/permission-data.service';
import { Permission } from 'src/app/shared/permission.model';
@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html',
  styleUrls: ['./departments.component.scss'],
})
export class DepartmentsComponent {
  constructor(private permissionService: PermissionDataService) {}
  activeModule: Permission | undefined;
  subPermissions: Permission[] = [];
  ngOnInit(): void {
    this.activeModule = this.permissionService.getModuleByName('Department');
    this.subPermissions = this.activeModule?.permissions || [];
    console.log(this.activeModule);
    console.log(this.subPermissions);
  }
}
