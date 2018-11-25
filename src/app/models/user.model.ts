import { UserInfo } from 'firebase';

export interface User extends UserInfo {
  // additional User properties
  first_name: string | null;
  last_name: string | null;
  phone: string | null;
}
