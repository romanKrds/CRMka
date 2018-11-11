import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface StatusesState extends EntityState<Status>{}

export const statusesAdapter: EntityAdapter<Status> = 
  createEntityAdapter<Status>();


export interface Status {
  id: string,
  description: string,
  title: string
}