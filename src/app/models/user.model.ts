import { UserInfo } from 'firebase';

export interface User extends UserInfo {
  loading?: boolean;
  error?: string;
}
