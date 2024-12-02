import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Project } from '../../models/project.model';
import { BaseState } from './base.state';

export const projectAdapter = createEntityAdapter<Project>({
  selectId: (project) => project.id,
  sortComparer: (a, b) => a.name.localeCompare(b.name),
});

export interface ProjectState extends EntityState<Project>, BaseState {
  selectedProjectId: string | null;
}

export const initialProjectState: ProjectState = projectAdapter.getInitialState({
  selectedProjectId: null,
  error: null,
  isLoading: false,
});