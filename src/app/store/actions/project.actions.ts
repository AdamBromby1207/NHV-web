import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Project, CreateProjectDto, UpdateProjectDto } from '../../models/project.model';

export const ProjectActions = createActionGroup({
  source: 'Project',
  events: {
    // Load Projects
    'Load Projects': emptyProps(),
    'Load Projects Success': props<{ projects: Project[] }>(),
    'Load Projects Failure': props<{ error: string }>(),

    // Load Single Project
    'Load Project': props<{ id: string }>(),
    'Load Project Success': props<{ project: Project }>(),
    'Load Project Failure': props<{ error: string }>(),

    // Create Project
    'Create Project': props<{ project: CreateProjectDto }>(),
    'Create Project Success': props<{ project: Project }>(),
    'Create Project Failure': props<{ error: string }>(),

    // Update Project
    'Update Project': props<{ project: UpdateProjectDto }>(),
    'Update Project Success': props<{ project: Project }>(),
    'Update Project Failure': props<{ error: string }>(),

    // Delete Project
    'Delete Project': props<{ id: string }>(),
    'Delete Project Success': props<{ id: string }>(),
    'Delete Project Failure': props<{ error: string }>(),

    // Select Project
    'Select Project': props<{ id: string | null }>(),

    // Clear Error
    'Clear Error': emptyProps(),
  },
});