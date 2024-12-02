import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { Labour } from '../../models/labour.model';
import { BaseState } from './base.state';

export const labourAdapter = createEntityAdapter<Labour>({
  selectId: (labour) => labour.id,
  sortComparer: (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
});

export interface LabourState extends EntityState<Labour>, BaseState {
  selectedLabourId: string | null;
  selectedProjectId: string | null;
  selectedJobId: string | null;
}

export const initialLabourState: LabourState = labourAdapter.getInitialState({
  selectedLabourId: null,
  selectedProjectId: null,
  selectedJobId: null,
  error: null,
  isLoading: false,
});