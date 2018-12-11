import { EntityState } from '@ngrx/entity';
import { ServiceWithId } from './service.model';

export interface ServicesState extends EntityState<ServiceWithId> {
  // additional entities state properties
  errors: string[] | null;
}
