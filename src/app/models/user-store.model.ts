import { User } from './user.model';

export interface UserState extends User {
  loading?: boolean;
  error?: string;
}
