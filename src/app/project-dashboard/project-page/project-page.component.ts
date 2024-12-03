import { Component, OnInit } from "@angular/core";
import { GanttChartComponent } from "../../shared/gantt-chart/gantt-chart.component";
import { TabMenuModule } from "primeng/tabmenu";
import { HeaderNavComponent } from "../../shared/header-nav/header-nav.component";
import { Store } from '@ngrx/store';
import { ProjectActions } from '../../store/actions/project.actions';
import { selectAllProjects, selectProjectsError, selectProjectsLoading } from '../../store/selectors/project.selectors';
import { Project } from '../../models/project.model';
import { AsyncPipe } from '@angular/common';
import { Observable } from 'rxjs';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  standalone: true,
  templateUrl: 'project-page.component.html',
  styleUrls: ['project-page.component.scss'],
  imports: [
    GanttChartComponent,
    TabMenuModule,
    HeaderNavComponent,
    AsyncPipe,
    MatProgressSpinner
  ],
  selector: 'project-page'
})
export class ProjectPageComponent implements OnInit {
  navItems = [
    { title: 'Chart', link: 'chart' },
    { title: 'Master Doc Register', link: 'masterdr' },
    { title: 'Labour', link: 'labour' },
    { title: 'Document Upload', link: 'docupload' },
    { title: 'TQ Register', link: 'TqRegister' }
  ];

  projects$: Observable<Project[]>;
  loading$: Observable<boolean>;
  error$: Observable<string | null>;

  constructor(
    private store: Store,
    private snackBar: MatSnackBar
  ) {
    this.projects$ = this.store.select(selectAllProjects);
    this.loading$ = this.store.select(selectProjectsLoading);
    this.error$ = this.store.select(selectProjectsError);
  }

  ngOnInit() {
    // Load projects when component initializes
    this.store.dispatch(ProjectActions.loadProjects());

    // Subscribe to errors to show in snackbar
    this.error$.subscribe(error => {
      if (error) {
        this.snackBar.open(error, 'Close', {
          duration: 5000,
          horizontalPosition: 'end',
          verticalPosition: 'top'
        });
      }
    });
  }

  createProject(projectData: any) {
    this.store.dispatch(ProjectActions.createProject({ project: projectData }));
  }

  updateProject(projectData: any) {
    this.store.dispatch(ProjectActions.updateProject({ project: projectData }));
  }

  deleteProject(id: string) {
    this.store.dispatch(ProjectActions.deleteProject({ id }));
  }

  selectProject(id: string) {
    this.store.dispatch(ProjectActions.selectProject({ id }));
  }
}
