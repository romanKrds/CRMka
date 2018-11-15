import { Status } from './status.model';
import { EntityState } from "@ngrx/entity";

export interface StatusesState extends EntityState<Status> {
  // additional entities state properties
  errors: string[] | null;
}