import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PermissionDataService {
  permissionData: any[] = [
    {
      name: 'Job',
      value: true,
      icon: '<i class="bi bi-briefcase-fill"></i>',
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
              value: false,
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
          value: false,
          isDisable: false,
        },
      ],
    },
    {
      name: 'Candidate',
      value: true,
      isDisable: false,
      icon: '<i class="bi bi-person-fill"></i>',
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
      icon: ' <i class="bi bi-gear-fill"></i>',
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
      icon: '<i class="bi bi-journal-bookmark-fill"></i>',
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
      icon: '<i class="bi bi-person-plus-fill"></i>',
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

  constructor() {}
}
