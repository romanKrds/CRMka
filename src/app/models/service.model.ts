export interface Service {
  businessId: string;
  description: string;
  title: string;
}
export interface ServiceWithId extends Service {
  id: string;
}
