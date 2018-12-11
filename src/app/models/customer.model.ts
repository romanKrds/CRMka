export interface Customer {
  businessId: string;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
}

export interface CustomerWithId extends Customer {
  id: string;
 }
