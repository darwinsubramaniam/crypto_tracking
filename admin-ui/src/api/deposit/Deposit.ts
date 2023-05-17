import { Currency } from "../currency/Currency";

export type Deposit = {
  amount: number;
  createdAt: Date;
  currency?: Currency;
  id: string;
  updatedAt: Date;
};
