import { EntityState } from '@ngrx/entity';
import { Order } from '@models/index';

export interface OrdersState extends EntityState<Order> {
  // additional entities state properties
  errors: string[] | null;
}
