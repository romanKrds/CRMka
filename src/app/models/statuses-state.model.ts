import { EntityState } from '@ngrx/entity';
import { Status } from '@models/*';

export interface StatusesState extends EntityState<Status> {
  // additional entities state properties
  errors: string[] | null;
}
