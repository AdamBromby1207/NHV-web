import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProjectState, projectAdapter } from '../state/project.state';

export const selectProjectState = createFeatureSelector<ProjectState>('project');

const { selectAll, selectEntities } = projectAdapter.getSelectors();

export const selectAllProjects = createSelector(
  selectProjectState,
  selectAll
);

export const selectProjectEntities = createSelector(
  selectProjectState,
  selectEntities
);

export const selectCurrentProjectId = createSelector(
  selectProjectState,
  (state: ProjectState) => state.selectedProjectId
);

export const selectCurrentProject = createSelector(
  selectProjectEntities,
  selectCurrentProjectId,
  (projectEntities, projectId) => projectId ? projectEntities[projectId] : null
);

export const selectProjectsLoading = createSelector(
  selectProjectState,
  (state: ProjectState) => state.isLoading
);

export const selectProjectsError = createSelector(
  selectProjectState,
  (state: ProjectState) => state.error
);
