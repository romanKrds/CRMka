import { Services } from '.';
import { EntityState } from '@ngrx/entity';

export interface StateServices extends EntityState<Services> {
  // additional entities state properties
  errors: string[] | null;
}
