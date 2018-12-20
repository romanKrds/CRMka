import { EntityState } from '@ngrx/entity';
import { Business } from '@models/*';

export interface BusinessState extends EntityState<Business> {
  // additional entities state properties
  errors: string[] | null;
}
