export interface Order {
  comment: string;
  created_at: string;
  customerId: string;
  ended_at: string;
  serviceId: string;
  started_at: string;
  state: string;
}

export interface OrderWithId extends Order {
  id: string;
}
