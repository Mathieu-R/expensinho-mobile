export type Transactions = {
  name: string;
  description?: string;
  category: string;
  value: number;
  date: Date;
  type: 'income' | 'expense';
};
