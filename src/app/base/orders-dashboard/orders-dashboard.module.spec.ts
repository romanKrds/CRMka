import { OrdersDashboardModule } from './orders-dashboard.module';

describe('OrdersDashboardModule', () => {
  let ordersDashboardModule: OrdersDashboardModule;

  beforeEach(() => {
    ordersDashboardModule = new OrdersDashboardModule();
  });

  it('should create an instance', () => {
    expect(ordersDashboardModule).toBeTruthy();
  });
});
