import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";

export type DepositCreateInput = {
  amount: number;
  currency: CurrencyWhereUniqueInput;
};
