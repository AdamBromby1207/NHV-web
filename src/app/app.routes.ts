import { Routes } from '@angular/router';
import { authGuard } from './guards/auth.guard';
import { ProjectOverviewComponent } from './features/projects/project-detail/overview/project-overview.component';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'projects'
  },
  {
    path: 'callback',
    loadComponent: () => import('./components/auth-callback/auth-callback.component').then(m => m.AuthCallbackComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./components/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'users',
    canActivate: [authGuard],
    loadComponent: () => import('./features/user-management/user-management.component').then(m => m.UserManagementComponent)
  },
  {
    path: 'settings',
    canActivate: [authGuard],
    loadComponent: () => import('./features/settings/settings.component').then(m => m.SettingsComponent)
  },
  {
    path: 'projects',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./features/projects/project-dashboard/project-dashboard.component').then(m => m.ProjectDashboardComponent)
      },
      {
        path: ':id',
        loadComponent: () => import('./features/projects/project-page/project-page.component').then(m => m.ProjectPageComponent),
        children: [
          {
            path: 'overview',
            component: ProjectOverviewComponent
          },
          {
            path: 'docs',
            loadComponent: () => import('./features/documents/docs-page/docs-page.component').then(m => m.DocsPageComponent),
            children: [
              {
                path: '',
                redirectTo: 'project',
                pathMatch: 'full'
              },
              {
                path: 'project',
                loadComponent: () => import('./features/documents/project-docs/project-docs.component').then(m => m.ProjectDocsComponent)
              },
              {
                path: 'health-safety',
                loadComponent: () => import('./features/documents/health-safety-docs/health-safety-docs.component').then(m => m.HealthSafetyDocsComponent)
              },
              {
                path: 'technical',
                loadComponent: () => import('./tq-register/tq-register.component').then(m => m.TqRegisterComponent)
              }
            ]
          },
          {
            path: 'chart',
            loadComponent: () => import('./chart-page/chart-page.component').then(m => m.ChartPageComponent)
          },
          {
            path: 'labour',
            loadComponent: () => import('./labour/labour.component').then(m => m.LabourComponent)
          },
          {
            path: '',
            redirectTo: 'overview',
            pathMatch: 'full'
          }
        ]
      }
    ]
  }
];
