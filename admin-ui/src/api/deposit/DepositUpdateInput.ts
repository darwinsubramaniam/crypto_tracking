import { CurrencyWhereUniqueInput } from "../currency/CurrencyWhereUniqueInput";

export type DepositUpdateInput = {
  amount?: number;
  currency?: CurrencyWhereUniqueInput;
};
