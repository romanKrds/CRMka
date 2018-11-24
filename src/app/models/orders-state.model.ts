import { EntityState } from '@ngrx/entity';
import { Order } from '@models/*';


export interface OrdersState extends EntityState<Order> {
  // additional entities state properties
  errors: string[] | null;
  currentOrder: string | null;
}
