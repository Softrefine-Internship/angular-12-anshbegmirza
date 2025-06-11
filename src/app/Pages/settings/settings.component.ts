import { Component, OnInit } from '@angular/core';
import { PermissionDataService } from 'src/app/shared/permission-data.service';
import { Permission } from 'src/app/shared/permission.model';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor(private permissionService: PermissionDataService) {}
  activeModule: Permission | undefined;
  subPermissions: Permission[] = [];
  ngOnInit(): void {
    this.activeModule = this.permissionService.getModuleByName('Settings');
    this.subPermissions = this.activeModule?.permissions || [];
    console.log(this.activeModule);
    console.log(this.subPermissions);
  }
}
