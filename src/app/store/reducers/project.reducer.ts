import { createReducer, on } from '@ngrx/store';
import { ProjectActions } from '../actions/project.actions';
import { projectAdapter, initialProjectState } from '../state/project.state';

export const projectReducer = createReducer(
  initialProjectState,

  // Load Projects
  on(ProjectActions.loadProjects, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(ProjectActions.loadProjectsSuccess, (state, { projects }) => 
    projectAdapter.setAll(projects, {
      ...state,
      isLoading: false
    })
  ),
  on(ProjectActions.loadProjectsFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Load Single Project
  on(ProjectActions.loadProject, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(ProjectActions.loadProjectSuccess, (state, { project }) =>
    projectAdapter.upsertOne(project, {
      ...state,
      isLoading: false
    })
  ),
  on(ProjectActions.loadProjectFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Create Project
  on(ProjectActions.createProject, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(ProjectActions.createProjectSuccess, (state, { project }) =>
    projectAdapter.addOne(project, {
      ...state,
      isLoading: false
    })
  ),
  on(ProjectActions.createProjectFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Update Project
  on(ProjectActions.updateProject, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(ProjectActions.updateProjectSuccess, (state, { project }) =>
    projectAdapter.updateOne(
      { id: project.id, changes: project },
      {
        ...state,
        isLoading: false
      }
    )
  ),
  on(ProjectActions.updateProjectFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Delete Project
  on(ProjectActions.deleteProject, (state) => ({
    ...state,
    isLoading: true,
    error: null
  })),
  on(ProjectActions.deleteProjectSuccess, (state, { id }) =>
    projectAdapter.removeOne(id, {
      ...state,
      isLoading: false
    })
  ),
  on(ProjectActions.deleteProjectFailure, (state, { error }) => ({
    ...state,
    isLoading: false,
    error
  })),

  // Select Project
  on(ProjectActions.selectProject, (state, { id }) => ({
    ...state,
    selectedProjectId: id
  })),

  // Clear Error
  on(ProjectActions.clearError, (state) => ({
    ...state,
    error: null
  }))
);
