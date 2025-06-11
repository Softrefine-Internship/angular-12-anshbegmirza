import { Component, OnInit } from '@angular/core';
import { PermissionDataService } from 'src/app/shared/permission-data.service';
import { Permission } from 'src/app/shared/permission.model';
@Component({
  selector: 'app-hire',
  templateUrl: './hire.component.html',
  styleUrls: ['./hire.component.scss'],
})
export class HireComponent implements OnInit {
  constructor(private permissionService: PermissionDataService) {}
  activeModule: Permission | undefined;
  subPermissions: Permission[] = [];
  ngOnInit(): void {
    this.activeModule = this.permissionService.getModuleByName('Hire');
    this.subPermissions = this.activeModule?.permissions || [];
    console.log(this.activeModule);
    console.log(this.subPermissions);
  }
}
