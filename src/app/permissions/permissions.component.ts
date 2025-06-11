import { Component, OnInit } from '@angular/core';
import { Permission } from '../shared/permission.model';
import { PermissionDataService } from '../shared/permission-data.service';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss'],
})
export class PermissionsComponent implements OnInit {
  permissions: Permission[] = [];
  selectAll: boolean = false;

  constructor(private permissionService: PermissionDataService) {}

  ngOnInit(): void {
    this.permissionService.defualtPermissions$.subscribe(
      (p) => (this.permissions = p)
    );
  }

  togglePermission(permission: Permission) {
    if (!permission.isDisable) {
      permission.value = !permission.value;
      console.log(permission);
    }

    if (permission.permissions) {
      permission.permissions.forEach((p) => {
        this.togglePermission(p);
      });
    }
    this.permissionService.updatePermission(this.permissions);
  }

  toggleAll() {
    this.selectAll = !this.selectAll;
    this.permissionService.toggleAllPermissions(this.selectAll);
  }

  resetAll() {
    this.selectAll = false;
    this.permissionService.resetToDefault();
  }
}
