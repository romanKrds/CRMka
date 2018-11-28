import { Business } from './business.model';

export interface CurrentBusinessState extends Business {
  error?: string;
}
