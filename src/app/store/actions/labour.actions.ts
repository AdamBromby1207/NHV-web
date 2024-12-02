import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Labour, CreateLabourDto, UpdateLabourDto } from '../../models/labour.model';

export const LabourActions = createActionGroup({
  source: 'Labour',
  events: {
    // Load All Labour
    'Load Labour Entries': emptyProps(),
    'Load Labour Entries Success': props<{ labourEntries: Labour[] }>(),
    'Load Labour Entries Failure': props<{ error: string }>(),

    // Load Single Labour Entry
    'Load Labour Entry': props<{ id: string }>(),
    'Load Labour Entry Success': props<{ labour: Labour }>(),
    'Load Labour Entry Failure': props<{ error: string }>(),

    // Load Labour By Project
    'Load Project Labour': props<{ projectId: string }>(),
    'Load Project Labour Success': props<{ labourEntries: Labour[] }>(),
    'Load Project Labour Failure': props<{ error: string }>(),

    // Load Labour By Job
    'Load Job Labour': props<{ jobId: string }>(),
    'Load Job Labour Success': props<{ labourEntries: Labour[] }>(),
    'Load Job Labour Failure': props<{ error: string }>(),

    // Create Labour Entry
    'Create Labour Entry': props<{ labour: CreateLabourDto }>(),
    'Create Labour Entry Success': props<{ labour: Labour }>(),
    'Create Labour Entry Failure': props<{ error: string }>(),

    // Update Labour Entry
    'Update Labour Entry': props<{ labour: UpdateLabourDto }>(),
    'Update Labour Entry Success': props<{ labour: Labour }>(),
    'Update Labour Entry Failure': props<{ error: string }>(),

    // Delete Labour Entry
    'Delete Labour Entry': props<{ id: string }>(),
    'Delete Labour Entry Success': props<{ id: string }>(),
    'Delete Labour Entry Failure': props<{ error: string }>(),

    // Select Labour Entry
    'Select Labour Entry': props<{ id: string | null }>(),
    
    // Select Project/Job for Filtering
    'Select Project Filter': props<{ projectId: string | null }>(),
    'Select Job Filter': props<{ jobId: string | null }>(),

    // Clear Error
    'Clear Error': emptyProps(),
  },
});