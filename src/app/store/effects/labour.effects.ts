import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, concatMap } from 'rxjs/operators';
import { LabourService } from '../../services/labour.service';
import { LabourActions } from '../actions/labour.actions';

@Injectable()
export class LabourEffects {
  loadLabourEntries$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LabourActions.loadLabourEntries),
      mergeMap(() => this.labourService.getLabourEntries()
        .pipe(
          map(labourEntries => LabourActions.loadLabourEntriesSuccess({ labourEntries })),
          catchError(error => of(LabourActions.loadLabourEntriesFailure({ error: error.message })))
        ))
    );
  });

  loadLabourEntry$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LabourActions.loadLabourEntry),
      mergeMap(({ id }) => this.labourService.getLabourEntry(id)
        .pipe(
          map(labour => LabourActions.loadLabourEntrySuccess({ labour })),
          catchError(error => of(LabourActions.loadLabourEntryFailure({ error: error.message })))
        ))
    );
  });

  loadProjectLabour$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LabourActions.loadProjectLabour),
      mergeMap(({ projectId }) => this.labourService.getLabourByProject(projectId)
        .pipe(
          map(labourEntries => LabourActions.loadProjectLabourSuccess({ labourEntries })),
          catchError(error => of(LabourActions.loadProjectLabourFailure({ error: error.message })))
        ))
    );
  });

  loadJobLabour$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LabourActions.loadJobLabour),
      mergeMap(({ jobId }) => this.labourService.getLabourByJob(jobId)
        .pipe(
          map(labourEntries => LabourActions.loadJobLabourSuccess({ labourEntries })),
          catchError(error => of(LabourActions.loadJobLabourFailure({ error: error.message })))
        ))
    );
  });

  createLabourEntry$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LabourActions.createLabourEntry),
      concatMap(({ labour }) => this.labourService.createLabourEntry(labour)
        .pipe(
          map(createdLabour => LabourActions.createLabourEntrySuccess({ labour: createdLabour })),
          catchError(error => of(LabourActions.createLabourEntryFailure({ error: error.message })))
        ))
    );
  });

  updateLabourEntry$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LabourActions.updateLabourEntry),
      concatMap(({ labour }) => this.labourService.updateLabourEntry(labour)
        .pipe(
          map(updatedLabour => LabourActions.updateLabourEntrySuccess({ labour: updatedLabour })),
          catchError(error => of(LabourActions.updateLabourEntryFailure({ error: error.message })))
        ))
    );
  });

  deleteLabourEntry$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LabourActions.deleteLabourEntry),
      mergeMap(({ id }) => this.labourService.deleteLabourEntry(id)
        .pipe(
          map(() => LabourActions.deleteLabourEntrySuccess({ id })),
          catchError(error => of(LabourActions.deleteLabourEntryFailure({ error: error.message })))
        ))
    );
  });

  constructor(
    private actions$: Actions,
    private labourService: LabourService
  ) {}
}