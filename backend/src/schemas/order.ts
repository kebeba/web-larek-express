enum PayMethod {
  Card = 'card',
  Online = 'online',
}

export interface IOrderData {
  items: string[];
  total: number;
  payment: PayMethod;
  email: string;
  phone: string;
  address: string;
}
