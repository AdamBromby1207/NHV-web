import {Route, Routes} from '@angular/router';

export const routes: Route[] = [
  {
    path: '',
    redirectTo: 'login-page',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'login-page',
        loadComponent: () =>
          import('./login/login.component').then((c) => c.LoginComponent)
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./project-dashboard/project-dashboard.component').then((c) => c.ProjectDashboardComponent),
        children : [


        ]
      },
      {
        path: 'projectPage',
        loadComponent: () => import('./project-dashboard/project-page/project-page.component').then((c) => c.ProjectPageComponent),
        children : [
          {
            path: 'masterdr',
            loadComponent: () =>
              import('./master-document-register/master-document-register.component').then((c) => c.MasterDocumentRegisterComponent),
          },
          {
            path: 'chart',
            loadComponent: () =>
              import('./chart-page/chart-page.component').then((c) => c.ChartPageComponent),
          },
          {
            path: 'labour',
            loadComponent: () =>
              import('./labour/labour.component').then((c) => c.LabourComponent),
          },
          {
            path: 'docupload',
            loadComponent: () =>
              import('./shared/document-upload/document-upload.component').then((c) => c.DocumentUploadComponent),
          },
          {
            path: 'TqRegister',
            loadComponent: () =>
              import('./tq-register/tq-register.component').then((c) => c.TqRegisterComponent),
          },
        ]
      },
      {
        path: 'labour',
        loadComponent: () => import('./labour/labour.component').then((c) => c.LabourComponent)
      },
      // {
      //   path: 'admin',
      //   loadComponent: () => import('').then((c) => c.AdminComponent)
      // }
    ]
  }
];
