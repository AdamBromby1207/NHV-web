import { Routes } from '@angular/router';

export const PROJECTS_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./project-dashboard/project-dashboard.component')
      .then(m => m.ProjectDashboardComponent)
  },
  {
    path: ':id',
    loadComponent: () => import('./project-page/project-page.component')
      .then(m => m.ProjectPageComponent),
    children: [
      {
        path: 'masterdr',
        loadComponent: () => import('../../master-document-register/master-document-register.component')
          .then(m => m.MasterDocumentRegisterComponent)
      },
      {
        path: 'chart',
        loadComponent: () => import('../../chart-page/chart-page.component')
          .then(m => m.ChartPageComponent)
      },
      {
        path: 'labour',
        loadComponent: () => import('../../labour/labour.component')
          .then(m => m.LabourComponent)
      },
      {
        path: 'docupload',
        loadComponent: () => import('../../shared/document-upload/document-upload.component')
          .then(m => m.DocumentUploadComponent)
      },
      {
        path: 'TqRegister',
        loadComponent: () => import('../../tq-register/tq-register.component')
          .then(m => m.TqRegisterComponent)
      }
    ]
  }
];
