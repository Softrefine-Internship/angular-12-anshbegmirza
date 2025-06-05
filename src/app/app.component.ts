import { Component, OnInit } from '@angular/core';
import { PermissionDataService } from './shared/permission-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'angular-12';

  constructor(private PermissionDService: PermissionDataService) {}

  permissionArray: any[] = this.PermissionDService.permissionData;

  ngOnInit(): void {
    console.log(this.permissionArray);
  }
}
