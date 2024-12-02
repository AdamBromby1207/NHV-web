import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, concatMap } from 'rxjs/operators';
import { ProjectService } from '../../services/project.service';
import { ProjectActions } from '../actions/project.actions';

@Injectable()
export class ProjectEffects {
  loadProjects$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectActions.loadProjects),
      mergeMap(() => this.projectService.getProjects()
        .pipe(
          map(projects => ProjectActions.loadProjectsSuccess({ projects })),
          catchError(error => of(ProjectActions.loadProjectsFailure({ error: error.message })))
        ))
    );
  });

  loadProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectActions.loadProject),
      mergeMap(({ id }) => this.projectService.getProject(id)
        .pipe(
          map(project => ProjectActions.loadProjectSuccess({ project })),
          catchError(error => of(ProjectActions.loadProjectFailure({ error: error.message })))
        ))
    );
  });

  createProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectActions.createProject),
      concatMap(({ project }) => this.projectService.createProject(project)
        .pipe(
          map(createdProject => ProjectActions.createProjectSuccess({ project: createdProject })),
          catchError(error => of(ProjectActions.createProjectFailure({ error: error.message })))
        ))
    );
  });

  updateProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectActions.updateProject),
      concatMap(({ project }) => this.projectService.updateProject(project)
        .pipe(
          map(updatedProject => ProjectActions.updateProjectSuccess({ project: updatedProject })),
          catchError(error => of(ProjectActions.updateProjectFailure({ error: error.message })))
        ))
    );
  });

  deleteProject$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ProjectActions.deleteProject),
      mergeMap(({ id }) => this.projectService.deleteProject(id)
        .pipe(
          map(() => ProjectActions.deleteProjectSuccess({ id })),
          catchError(error => of(ProjectActions.deleteProjectFailure({ error: error.message })))
        ))
    );
  });

  constructor(
    private actions$: Actions,
    private projectService: ProjectService
  ) {}
}