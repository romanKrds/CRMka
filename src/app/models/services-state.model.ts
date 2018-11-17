import { EntityState } from '@ngrx/entity';
import { Service } from '@models/*';

export interface ServicesState extends EntityState<Service> {
  // additional entities state properties
  errors: string[] | null;
}
