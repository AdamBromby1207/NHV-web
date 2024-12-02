import { createReducer, on } from '@ngrx/store';
import { LabourActions } from '../actions/labour.actions';
import { labourAdapter, initialLabourState } from '../state/labour.state';

export const labourReducer = createReducer(
  initialLabourState,

  // Load Labour Entries
  on(LabourActions.loadLabourEntries, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(LabourActions.loadLabourEntriesSuccess, (state, { labourEntries }) =>
    labourAdapter.setAll(labourEntries, {
      ...state,
      isLoading: false
    })
  ),
  on(LabourActions.loadLabourEntriesFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Load Single Labour Entry
  on(LabourActions.loadLabourEntry, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(LabourActions.loadLabourEntrySuccess, (state, { labour }) =>
    labourAdapter.upsertOne(labour, {
      ...state,
      isLoading: false
    })
  ),
  on(LabourActions.loadLabourEntryFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Load Project Labour
  on(LabourActions.loadProjectLabour, (state, { projectId }) => ({
    ...state,
    selectedProjectId: projectId,
    isLoading: true,
    error: null
  })),
  on(LabourActions.loadProjectLabourSuccess, (state, { labourEntries }) =>
    labourAdapter.setAll(labourEntries, {
      ...state,
      isLoading: false
    })
  ),
  on(LabourActions.loadProjectLabourFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Load Job Labour
  on(LabourActions.loadJobLabour, (state, { jobId }) => ({
    ...state,
    selectedJobId: jobId,
    isLoading: true,
    error: null
  })),
  on(LabourActions.loadJobLabourSuccess, (state, { labourEntries }) =>
    labourAdapter.setAll(labourEntries, {
      ...state,
      isLoading: false
    })
  ),
  on(LabourActions.loadJobLabourFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Create Labour Entry
  on(LabourActions.createLabourEntry, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(LabourActions.createLabourEntrySuccess, (state, { labour }) =>
    labourAdapter.addOne(labour, {
      ...state,
      isLoading: false
    })
  ),
  on(LabourActions.createLabourEntryFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Update Labour Entry
  on(LabourActions.updateLabourEntry, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(LabourActions.updateLabourEntrySuccess, (state, { labour }) =>
    labourAdapter.updateOne(
      { id: labour.id, changes: labour },
      {
        ...state,
        isLoading: false
      }
    )
  ),
  on(LabourActions.updateLabourEntryFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Delete Labour Entry
  on(LabourActions.deleteLabourEntry, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(LabourActions.deleteLabourEntrySuccess, (state, { id }) =>
    labourAdapter.removeOne(id, {
      ...state,
      isLoading: false
    })
  ),
  on(LabourActions.deleteLabourEntryFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Select Labour Entry
  on(LabourActions.selectLabourEntry, (state, { id }) => ({
    ...state,
    selectedLabourId: id
  })),

  // Select Project Filter
  on(LabourActions.selectProjectFilter, (state, { projectId }) => ({
    ...state,
    selectedProjectId: projectId
  })),

  // Select Job Filter
  on(LabourActions.selectJobFilter, (state, { jobId }) => ({
    ...state,
    selectedJobId: jobId
  })),

  // Clear Error
  on(LabourActions.clearError, (state) => ({
    ...state,
    error: null
  }))
);
