import { Component, OnInit } from '@angular/core';
import { PermissionDataService } from 'src/app/shared/permission-data.service';
import { Permission } from 'src/app/shared/permission.model';
@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent implements OnInit {
  constructor(private permissionService: PermissionDataService) {}
  activeModule: Permission | undefined;
  subPermissions: Permission[] = [];
  ngOnInit(): void {
    this.activeModule = this.permissionService.getModuleByName('Job');
    this.subPermissions = this.activeModule?.permissions || [];
    console.log(this.activeModule);
    console.log(this.subPermissions);
  }
}
