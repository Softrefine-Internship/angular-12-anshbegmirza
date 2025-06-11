import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Permission } from './permission.model';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PermissionDataService {
  private permissionData: any[] = [
    {
      name: 'Job',
      value: true,
      icon: 'bi bi-briefcase-fill',
      isDisable: false,
      permissions: [
        {
          name: 'Add Job',
          value: true,
          isDisable: false,
        },
        {
          name: 'View Job',
          value: true,
          isDisable: false,
          permissions: [
            {
              name: 'View Job Details',
              value: true,
              isDisable: false,
            },
            {
              name: 'View Applicants',
              value: true,
              isDisable: true,
            },
          ],
        },
        {
          name: 'Edit Job',
          value: true,
          isDisable: false,
        },
      ],
    },
    {
      name: 'Candidate',
      value: true,
      isDisable: false,
      icon: 'bi bi-person-fill',
      permissions: [
        {
          name: 'Add Candidate',
          value: false,
          isDisable: false,
        },
        {
          name: 'View Candidate',
          value: true,
          isDisable: false,
          permissions: [
            {
              name: 'View Candidate Profile',
              value: true,
              isDisable: true,
            },
            {
              name: 'View Candidate History',
              value: false,
              isDisable: false,
            },
          ],
        },
        {
          name: 'Edit Candidate',
          value: true,
          isDisable: false,
        },
      ],
    },
    {
      name: 'Settings',
      value: true,
      isDisable: true,
      icon: 'bi bi-gear-fill',
      permissions: [
        {
          name: 'Manage Settings',
          value: false,
          isDisable: true,
        },
        {
          name: 'View Logs',
          value: true,
          isDisable: false,
        },
      ],
    },
    {
      name: 'Reports',
      value: false,
      isDisable: false,
      icon: 'bi bi-journal-bookmark-fill',
      permissions: [
        {
          name: 'Generate Reports',
          value: true,
          isDisable: false,
        },
        {
          name: 'Export Reports',
          value: false,
          isDisable: false,
        },
      ],
    },
    {
      name: 'Hire',
      value: false,
      isDisable: false,
      icon: 'bi bi-person-plus-fill',
      permissions: [
        {
          name: 'Create Job Opening',
          value: true,
          isDisable: false,
        },
        {
          name: 'Review Applications',
          value: false,
          isDisable: true,
        },
      ],
    },
    {
      name: 'Department',
      value: true,
      isDisable: true,
      icon: 'bi bi-person-plus-fill',
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

  private defaultPermissionState = new BehaviorSubject<Permission[]>(
    JSON.parse(JSON.stringify(this.permissionData))
  );

  defualtPermissions$ = this.defaultPermissionState.asObservable();

  constructor() {}

  resetToDefault() {
    this.defaultPermissionState.next(
      JSON.parse(JSON.stringify(this.permissionData))
    );
  }

  updatePermission(update: Permission[]) {
    this.defaultPermissionState.next(update);
  }

  getActiveModules() {
    return this.defaultPermissionState.pipe(
      map((permission) => {
        permission.filter((p) => p.value);
        return permission;
      })
    );
  }

  getModuleByName(name: string): Permission | undefined {
    return this.defaultPermissionState
      .getValue()
      .find((permission) => permission.name === name);
  }

  toggleAllPermissions(on: boolean) {
    let updatedPermissions = this.defaultPermissionState.getValue().map((p) => {
      return {
        ...p,
        value: p.isDisable ? p.value : on,
        permissions: p.permissions
          ? this.deepTooglePermission(p.permissions, on)
          : undefined,
      };
    });
    this.defaultPermissionState.next(updatedPermissions);
  }

  deepTooglePermission(permission: Permission[], on: boolean): Permission[] {
    console.log(permission);
    return permission.map((p) => {
      return {
        ...p,
        value: p.isDisable ? p.value : on,
        permissions: p.permissions
          ? this.deepTooglePermission(p.permissions, on)
          : undefined,
      };
    });
  }

  flattenPermissions(permission: Permission[]): Permission[] {
    let flatPermissions: Permission[] = [];
    permission.forEach((p) => {
      flatPermissions.push(p);
      if (p.permissions) {
        flatPermissions = flatPermissions.concat(
          this.flattenPermissions(p.permissions)
        );
      }
    });
    return flatPermissions;
  }

  hasPermission(name: string, permission: Permission[]): boolean {
    const flatPermissions = this.flattenPermissions(permission);
    const foundPermission = flatPermissions.find((p) => p.name === name);
    return foundPermission ? foundPermission.value : false;
  }
}
