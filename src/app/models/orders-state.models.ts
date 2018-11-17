import { EntityState } from '@ngrx/entity';
import { Order } from '@models/index';

export interface Orders extends EntityState<Order> { }
