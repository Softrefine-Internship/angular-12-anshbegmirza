import { Component, OnInit } from '@angular/core';
import { PermissionDataService } from 'src/app/shared/permission-data.service';
import { Permission } from 'src/app/shared/permission.model';
@Component({
  selector: 'app-candidate',
  templateUrl: './candidate.component.html',
  styleUrls: ['./candidate.component.scss'],
})
export class CandidateComponent implements OnInit {
  constructor(private permissionService: PermissionDataService) {}
  activeModule: Permission | undefined;
  subPermissions: Permission[] = [];
  ngOnInit(): void {
    this.activeModule = this.permissionService.getModuleByName('Candidate');
    this.subPermissions = this.activeModule?.permissions || [];
    console.log(this.activeModule);
    console.log(this.subPermissions);
  }
}
