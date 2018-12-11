import { EntityState } from '@ngrx/entity';
import { StatusWithId } from './status.model';

export interface StatusesState extends EntityState<StatusWithId> {
  // additional entities state properties
  errors: string[] | null;
}
