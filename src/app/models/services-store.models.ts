import { Service } from '.';
import { EntityState } from '@ngrx/entity';

export interface StateServices extends EntityState<Service> {
  // additional entities state properties
  errors: string[] | null;
}
